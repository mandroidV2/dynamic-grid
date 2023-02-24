/**
 *  base element for HTMLElement, extend for use
 */
class BaseElement extends HTMLElement  {
    constructor(options = {}) {
        super();

        const template = document.createElement("template");
        template.innerHTML = this.constructor.template();

        const shadowRoot = this.attachShadow({
            mode: "open"
        });
        shadowRoot.appendChild(template.content.cloneNode(true));

        this._ready(options);

        this.log("constructor");
    }

    /**
     * template fallback
     */
    static template() {
        return "";
    }

    /**
     *  called when ready, extend to user
     */
    _ready() {

    }

    log() {
        if (this.debug) {
            console.log.apply(console, arguments);
        }
    }


    /**
     * This is called when connected. Extend in subclass if needed.
     */
    _connected() {
    }

    /**
     * This is called when disconnected. Extend in subclass if needed.
     */
    _disconnected() {
    }

    /**
     *  This is called when attribute changes. Extend in subclass if needed.
     */
    _attributeChanged() {
    }

    /**
     *  Lifecycle callback when connected
     */
    connectedCallback() {
        // ensure whenDefined callbacks run first
        setTimeout(() => {
            this.log("connectedCallback");
            this._connected();
            // dispatch event once connected
            this.dispatchEvent(new Event("connected"));
        }, 0);
    }

    /**
     *  Lifecycle callback when disconnected
     */
    disconnectedCallback() {
        this.log("disconnectedCallback");
        this._disconnected();
        // dispatch event once disconnected
        this.dispatchEvent(new Event("disconnected"));
    }

    /**
     *  Lifecycle callback when attribute changes
     */
    attributeChangedCallback(attributeName, oldValue, newValue) {
        // nothing changes
        if (oldValue === newValue) {
            return;
        }

        this._attributeChanged(attributeName, newValue);
    }

    /**
     *  Lifecycle callback when component is adopted into a new document
     */
    adoptedCallback() {
        this.log('I am adopted!');
    }
}

export default BaseElement;

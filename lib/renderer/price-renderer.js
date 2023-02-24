import BaseElement from "../core/base-element.js";

/**
 *  Price renderer template
 */
class PriceRenderer extends BaseElement {
    static template () { 
        return `<span style='color: blue'> $ <slot/> </span>`
    }
}

customElements.define("price-renderer", PriceRenderer);

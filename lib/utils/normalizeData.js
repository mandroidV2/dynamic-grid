/**
 * Parse data attribute and return properly typed data
 */
export default function normalizeData(v) {
    // Bool
    if (v === "true" || v === true) {
        return true;
    }
    if (v === "false" || v === false) {
        return false;
    }
    // Null or empty
    if (v === "" || v === "null" ) {
        return null;
    }
    // Numeric attributes
    if (v === Number(v).toString()) {
        return Number(v);
    }
    // check for integer
    if (Number.isInteger(v)) {
        return v;
    }
    // check if object or array
    if (typeof v === 'object') {
        return v;
    }
    // Only attempt json parsing for array or objects
    if (v && ["[", "{"].includes(v.substring(0, 1))) {
        try {
            // In case we have only single quoted values, like ['one', 'two', 'three']
            if (v.indexOf('"') === -1) {
                v = v.replace(/'/g, '"');
            }
            return JSON.parse(decodeURIComponent(v));
        } catch {
            console.error("Failed to parse " + v);
            return {};
        }
    }
    return v;
}

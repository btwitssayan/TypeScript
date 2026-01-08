function getChai(chai) {
    if (typeof chai === 'string') {
        return `Your chai: ${chai}`;
    }
    return `your another chai ${chai}`;
}
function getmsg(msg) {
    if (msg) {
        return `your ${msg}`;
    }
    return 'your default value';
}
function orderChai(size) {
    if (size === "small") {
        return `small cutting chai...`;
    }
    if (size === "medium" || size === "large") {
        return `make extra chai`;
    }
    return `chai order ${size}`;
}
class kulhadChai {
    serve() {
        return `Serving KulhadChai...`;
    }
}
class CuttingChai {
    serve() {
        return `Serving CuttingChai...`;
    }
}
function serve(chai) {
    if (chai instanceof kulhadChai) {
        return chai.serve();
    }
}
function isChaiOrder(obj) {
    return (typeof obj === 'object' &&
        obj != null && typeof obj.type === 'string'
        && typeof obj.sugar === 'number');
}
function serverOreder(item) {
    if (isChaiOrder(item)) {
        return `Serving ${item.sugar} chai with ${item.sugar} sugar`;
    }
    return `Serving custom chai:${item}`;
}
function MakeChai(order) {
    switch (order.type) {
        case 'masala':
            return `Masala Chai`;
            break;
        case 'elaichi':
            return `Elachi Chai`;
            break;
        case 'ginger':
            return `Ginger Chai`;
        default:
            break;
    }
}
function brew(order) {
    if ("amount" in order) {
        //
    }
}
function isStringArray(arr) {
    //
}
export {};
//# sourceMappingURL=typeNarrowing.js.map
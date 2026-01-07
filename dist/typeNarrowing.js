"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
let chai;
serve(chai = new kulhadChai);
//# sourceMappingURL=typeNarrowing.js.map
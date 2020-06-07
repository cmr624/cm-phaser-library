"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createDiv(height, width) {
    var el = document.createElement('div');
    el.tabIndex = 0;
    el.style.height = height + "px";
    el.style.width = width + "px";
    el.setAttribute('role', 'button');
    return el;
}
exports.createDiv = createDiv;
//# sourceMappingURL=tabbable.js.map
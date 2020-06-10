export interface ITabbable {
    domElement : Phaser.GameObjects.DOMElement;
    moveDOMElement(x:number, y:number) : void;
    hideDOMElement() : void;
    showDOMElement() : void;
}

export function createDiv(height, width) {
    let el = document.createElement('div');
    el.tabIndex = 0;
    el.style.height = height + "px";
    el.style.width =  width + "px";
    el.setAttribute('role', 'button');
    return el;
}
export interface ITabbable {
    domElement: Phaser.GameObjects.DOMElement;
    moveDOMElement(x: number, y: number): void;
    hideDOMElement(): void;
    showDOMElement(): void;
}
export declare function createDiv(height: any, width: any): any;

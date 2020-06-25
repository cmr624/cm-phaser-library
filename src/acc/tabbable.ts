import { BaseSprite } from "../sprites/base";

export interface ITabbableButton extends ITabbable{
    btn : Phaser.GameObjects.Sprite;
    moveDOMElementToButton() : void;
}

export interface ITabbable {
    domElement : Phaser.GameObjects.DOMElement;
    moveDOMElement(x:number, y:number) : void;
    hideDOMElement() : void;
    showDOMElement() : void;
}

export function createTabbableDiv(width, height) {
    let el = document.createElement('div');
    el.tabIndex = 0;
    el.style.height = height + "px";
    el.style.width =  width + "px";
    el.setAttribute('role', 'button');
    return el;
}

/**
 *
 *
 * @export
 * @class TabbableButton
 * @implements {ITabbableButton}
 */
export class TabbableButton implements ITabbableButton{
    btn : BaseSprite;
    domElement : Phaser.GameObjects.DOMElement;
    constructor(public scene : Phaser.Scene, x : number, y : number, key : string, public onClick : Function, callbackContext? : any){
        this.btn = new BaseSprite(scene, x, y, key);//, onClick, callbackContext!); 
        this.btn.setInteractive();
        this.btn.on('pointerdown', () => {
            onClick();
        });
        let el = createTabbableDiv(this.btn.width, this.btn.height);
        el.onkeydown = (e : KeyboardEvent) => {
            if ((e.which === 13) || (e.which === 32)) {
                this.btn.emit('pointerdown');
            }
        };
        this.domElement = this.scene.add.dom(this.btn.x, this.btn.y, el);
        this.domElement.setOrigin(0);
    }

    moveDOMElementToButton() : void {
        this.moveDOMElement(this.btn.x, this.btn.y);
    }

    moveDOMElement(x : number, y : number) {
        this.domElement.setPosition(x, y);
    }

    hideDOMElement(){
        this.domElement.tabIndex = -1;
        this.domElement.setVisible(false);
    }

    showDOMElement(){
        this.domElement.tabIndex = 0;
        this.domElement.setVisible(true);
    }
}
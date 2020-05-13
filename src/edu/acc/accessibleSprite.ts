import { BaseSprite } from "../../sprites/base";
import BaseEDUScene from "../baseEduScene";
import { createDiv, ITabbable } from "./tabbable";

/**
 * Base Accessible Sprite
 * @property {BaseEDUScene} scene a reference to the current scene the sprite exists in
 */
export class AccessibleSpriteButton extends BaseSprite implements ITabbable{
    
    domElement : Phaser.GameObjects.DOMElement;
    name : string;

    clickFunction : Function;
    /**
     * Base Accessible Sprite
     * Contains a DOM element that has the same width / height as our button
     * 
     */
    constructor(public scene : BaseEDUScene, x : number, y : number, key : string) {
        super(scene, x, y, key);
        this.name = key;
        let el = createDiv(this.height, this.width);
        el.onkeydown = ((e) => {
            if ((e.which === 13) || (e.which === 32)) {
                this.clickFunction ? this.clickFunction():undefined;
            }
        });
        this.domElement = this.scene.add.dom(x, y, el);
        this.showDOMElement();
    }

    setClick(fn : Function){
        this.setInteractive();
        this.on('pointerdown', () => {
            fn();
        });
        this.clickFunction = fn;
    }

    moveDOMElement(x, y) {
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

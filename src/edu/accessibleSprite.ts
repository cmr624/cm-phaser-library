import { BaseSprite } from "../sprites/base";
import BaseEDUScene from "./baseEduScene";

/**
 * Base Accessible Sprite
 * @property {BaseEDUScene} scene a reference to the current scene the sprite exists in
 */
export class AccessibleSpriteButton extends BaseSprite{
    
    domElement : Phaser.GameObjects.DOMElement;
    name : string;
    /**
     * Base Accessible Sprite
     * Contains a DOM element that has the same width / height as our button
     * 
     */
    constructor(public scene : BaseEDUScene, x : number, y : number, key : string) {
        super(scene, x, y, key);
        this.name = key;
        let el = document.createElement('div');
        el.tabIndex = 0;
        el.style.width = this.width + "px";
        el.style.height = this.height + "px";
        el.setAttribute('role', 'button');
        el.onkeydown = ((e) => {
            if ((e.which === 13) || (e.which === 32)) {
                this.click();
            }
        });
        this.domElement = this.scene.add.dom(x, y, el);

        this.setInteractive();
        this.on('pointerdown', () => this.click());
    }

    click(){
        this.scene.subtitleManager.addSubtitle(this.scene, this.name);
    }

    moveDOMElement(x, y) {
        this.domElement.setPosition(x, y);
    }

    hideDOMElement(){
        this.domElement.setVisible(false);
    }

    showDOMElement(){
        this.domElement.setVisible(true);
    }
}

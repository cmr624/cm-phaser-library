import { BaseSprite } from "../../sprites/base";
import BaseEDUScene from "../baseEduScene";
import { ITabbable } from "./tabbable";
/**
 * Base Accessible Sprite
 * @property {BaseEDUScene} scene a reference to the current scene the sprite exists in
 */
export declare class AccessibleSpriteButton extends BaseSprite implements ITabbable {
    scene: BaseEDUScene;
    domElement: Phaser.GameObjects.DOMElement;
    name: string;
    clickFunction: Function;
    /**
     * Base Accessible Sprite
     * Contains a DOM element that has the same width / height as our button
     *
     */
    constructor(scene: BaseEDUScene, x: number, y: number, key: string);
    setClick(fn: Function): void;
    moveDOMElement(x: any, y: any): void;
    hideDOMElement(): void;
    showDOMElement(): void;
}

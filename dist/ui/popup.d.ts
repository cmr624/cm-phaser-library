import { BaseSprite } from './../sprites/base';
/**
 * Round Rectangle Sprite
 * Based on a graphics rectangle object.
 */
declare class RoundedRectangleSprite extends BaseSprite {
    scene: Phaser.Scene;
    rectangleGraphics: RoundedRectangle;
    constructor(scene: any, x: any, y: any, width: any, height: any);
}
/**
 * RoundedRectangle
 * This guy draws a rounded rectangle, creates a texture for it, and destroys itself. Word.
 * Also, be careful because this is a proof of concept and is kind of hacky.
 * @extends {Phaser.GameObjects.Graphics} graphics
 */
declare class RoundedRectangle extends Phaser.GameObjects.Graphics {
    shapeGraphic: Phaser.GameObjects.Graphics;
    strokeGraphic: Phaser.GameObjects.Graphics;
    constructor(scene: any, rectObj: any, radius?: number);
}
export declare class Popup extends RoundedRectangleSprite {
    constructor(scene: any, x: any, y: any, width: any, height: any);
}
export {};

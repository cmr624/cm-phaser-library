//NOT IMPLEMENTED YET
import { BaseSprite } from './../sprites/base';
/**
 * Round Rectangle Sprite
 * Based on a graphics rectangle object.
 */
class RoundedRectangleSprite extends BaseSprite {
    scene : Phaser.Scene;
    rectangleGraphics : RoundedRectangle
    constructor(scene, x, y, width, height) {
        super(scene, x, y, '');
        this.rectangleGraphics = new RoundedRectangle(scene, {width:width, height:height});
        this.setTexture('roundedRect');
        this.setOrigin(.5);
    }
}

/**
 * RoundedRectangle
 * This guy draws a rounded rectangle, creates a texture for it, and destroys itself. Word.
 * Also, be careful because this is a proof of concept and is kind of hacky.
 * @extends {Phaser.GameObjects.Graphics} graphics
 */
class RoundedRectangle extends Phaser.GameObjects.Graphics {
    //scene : Phaser.Scene;
    shapeGraphic : Phaser.GameObjects.Graphics;
    strokeGraphic : Phaser.GameObjects.Graphics;
    constructor(scene, rectObj : any, radius? : number) {
        super(scene);
        this.scene.add.existing(this);
        //light blue and "bold" stroke
        this.lineStyle(20, 0x000000);
        this.fillStyle(0xadd8e6);
        //TODO: hacky, figure out some math that figures out why it messes up
        this.shapeGraphic = this.fillRoundedRect(2.5, 2.5, rectObj.width+5, rectObj.height+5, 20);
        this.strokeGraphic = this.strokeRoundedRect(10, 10, rectObj.width, rectObj.height, 20);
        this.generateTexture('roundedRect', rectObj.width + 20, rectObj.height + 20);
        this.destroy();
    }
}

//TODO: Implement popup
export class Popup extends RoundedRectangleSprite {
    constructor(scene, x, y, width, height) {
        super(scene, x, y, width, height);
    }

}

//graveyard
//this.fillRect(rectObj.x, rectObj.y, rectObj.width, rectObj.height);
//graphics.fillRoundedRect(x, y, width, height, radius);
//this.strokeRect(rectObj.x, rectObj.y, rectObj.width, rectObj.height);
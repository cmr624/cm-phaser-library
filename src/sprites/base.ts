/**
 * Base Sprite
 * @property {Phaser.Scene} scene a reference to the current scene the sprite exists in
 */
export class BaseSprite extends Phaser.GameObjects.Sprite {
    /**
     * Base Sprite, adds to current scene and keeps a reference to the current scene.
     * 
     */
    constructor(public scene : Phaser.Scene, x : number, y : number, key : string) {
        super(scene, x, y, key);
        this.scene.add.existing(this);
    }
}
/**
 * Base Arcade Sprite
 * Adds the sprite to the current scene and enables it for physics.
 * @property {Phaser.Scene} scene a reference to the current scene the sprite exists in
 */
export class BaseArcadeSprite extends Phaser.Physics.Arcade.Sprite {
    constructor(public scene : Phaser.Scene, x : number, y : number, key : string){
        super(scene, x, y, key);
        this.scene.physics.world.enable(this);
        this.scene.add.existing(this);
    }
}
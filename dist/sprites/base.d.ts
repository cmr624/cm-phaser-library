/**
 * Base Sprite
 * @property {Phaser.Scene} scene a reference to the current scene the sprite exists in
 */
export declare class BaseSprite extends Phaser.GameObjects.Sprite {
    scene: Phaser.Scene;
    /**
     * Base Sprite, adds to current scene and keeps a reference to the current scene.
     *
     */
    constructor(scene: Phaser.Scene, x: number, y: number, key: string);
}
/**
 * Base Arcade Sprite
 * Adds the sprite to the current scene and enables it for physics.
 * @property {Phaser.Scene} scene a reference to the current scene the sprite exists in
 */
export declare class BaseArcadeSprite extends Phaser.Physics.Arcade.Sprite {
    scene: Phaser.Scene;
    constructor(scene: Phaser.Scene, x: number, y: number, key: string);
}

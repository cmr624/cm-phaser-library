import 'phaser';
export namespace lib {
    export class BaseSprite extends Phaser.GameObjects.Sprite {
        scene : Phaser.Scene;

        /**
         * Base Sprite, adds to current scene and keeps a reference to the current scene.
         */
        constructor(scene, x, y, key) {
            super(scene, x, y, key);
            this.scene = scene;
            this.scene.add.existing(this);
        }
    }

}

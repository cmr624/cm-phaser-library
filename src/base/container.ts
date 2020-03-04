/**
 * Base Container to extend from
 */
export class BaseContainer extends Phaser.GameObjects.Container{
    constructor(public scene, x, y, children?){
      super(scene, x, y, children ? children : undefined);
      this.scene.add.existing(this);
    }
  }
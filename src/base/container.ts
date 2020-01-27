export class BaseContainer extends Phaser.GameObjects.Container{
    scene : Phaser.Scene;
    constructor(scene, x, y, children?){
      super(scene, x, y, children ? children : undefined);
      this.scene = scene;
      this.scene.add.existing(this);
    }
  }
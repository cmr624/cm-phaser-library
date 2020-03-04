import 'phaser';
import { BaseSprite, BaseArcadeSprite } from "../base";
import { BaseContainer } from '../../base/container';
export class DraggableSprite extends BaseSprite {

    constructor(scene, x, y, key, public dragEnd?){
        super(scene, x, y, key);  
        this.setInteractive(); 
        this.scene.input.setDraggable(this);
    }

    dragStart(){
        console.log('entered drag');
    }

    drop(){
        console.log('left drag');
    }
}

export class DraggableContainer extends BaseContainer {

    constructor(scene, x, y, children?){
        super(scene, x, y, children!);
    }

    initInteractive(){
        this.setInteractive();
        this.scene.input.setDraggable(this);
    }
    dragStart(){

    }

    drop(){

    }
}

/**
 * 
 * 
 * Name 	Type 	Description
pointer 	Phaser.Input.Pointer 	

The Pointer responsible for triggering this event.
gameObject 	Phaser.GameObjects.GameObject 	

The interactive Game Object that this pointer is dragging.
dragX 	number 	

The x coordinate where the Pointer is currently dragging the Game Object, in world space.
dragY 	number 	

The y coordinate where the Pointer is currently dragging the Game Object, in world space.

 * drag(pointer , gameObject , dragX, dragY) {
      if (gameObject.type !== "FAKE") {
        gameObject.parentContainer.bringToTop(gameObject);
      }

      gameObject.x = dragX;
      gameObject.y = dragY;
      
    }  
    this.scene.physics.world.enable(this);
        this.setCollideWorldBounds();
        this.scene.add.existing(this);
        this.setInteractive();
        this.scene.input.setDraggable(this);

        this.scene.input.on('drag',  this.drag);
        this.scene.input.on('dragend', (p, go) => {
 * 
 */
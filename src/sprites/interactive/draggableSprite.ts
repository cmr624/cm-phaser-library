import { BaseSprite, BaseArcadeSprite } from "../base";
import { BaseContainer } from '../../base/container';
export class DraggableSprite extends BaseSprite {

    constructor(scene, x, y, key, public dragEnd?){
        super(scene, x, y, key);  
        this.setInteractive(); 
        this.scene.input.setDraggable(this);
    }

    dragStart(){
        //console.log('entered drag');
    }

    drop(){
        //console.log('left drag');
    }
}

//TODO : Make abstract? does it matter?
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

    dropOnTarget(dropZone : Phaser.GameObjects.Zone){
        
    }
}
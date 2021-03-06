
export default class DraggableManager extends Phaser.GameObjects.GameObject{
    currentGameObject;

    constructor(public scene : Phaser.Scene){
        super(scene, 'draggableManager');
        this.scene.add.existing(this);
        this.scene.input.on('drag', this.drag);
        this.scene.input.on('dragstart', this.dragStart);
        this.scene.input.on('pointerup', this.drop);
        this.scene.input.on('drop', this.dropOnTarget);
    }
    /**
     * 
     * @param pointer 
     * @param gameObject 
     * @param dragX 
     * @param dragY 
     */
    drag(pointer: Phaser.Input.Pointer, go, dragX, dragY){
        go.x = dragX;
        go.y = dragY;
    }

    dropOnTarget(pointer, gameObject, dropZone){
        // console.log('drop');
        // console.log(dropZone);
        gameObject?.dropOnTarget(dropZone);
    }

    dragStart(pointer, go){
        go?.dragStart();
        this.currentGameObject = go;
    }

    drop(){
        this.currentGameObject?.drop();
        this.currentGameObject = undefined;
    }
}
   
   
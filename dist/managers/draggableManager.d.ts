export default class DraggableManager extends Phaser.GameObjects.GameObject {
    scene: Phaser.Scene;
    currentGameObject: any;
    constructor(scene: Phaser.Scene);
    /**
     *
     * @param pointer
     * @param gameObject
     * @param dragX
     * @param dragY
     */
    drag(pointer: Phaser.Input.Pointer, go: any, dragX: any, dragY: any): void;
    dropOnTarget(pointer: any, gameObject: any, dropZone: any): void;
    dragStart(pointer: any, go: any): void;
    drop(): void;
}

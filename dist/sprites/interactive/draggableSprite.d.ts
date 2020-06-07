import { BaseSprite } from "../base";
import { BaseContainer } from '../../base/container';
export declare class DraggableSprite extends BaseSprite {
    dragEnd?: any;
    constructor(scene: any, x: any, y: any, key: any, dragEnd?: any);
    dragStart(): void;
    drop(): void;
}
export declare class DraggableContainer extends BaseContainer {
    constructor(scene: any, x: any, y: any, children?: any);
    initInteractive(): void;
    dragStart(): void;
    drop(): void;
    dropOnTarget(dropZone: Phaser.GameObjects.Zone): void;
}

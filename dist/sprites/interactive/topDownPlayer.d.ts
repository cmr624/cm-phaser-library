import { BaseArcadeSprite } from './../base';
import { StandardKeyboardInput } from "../../input/standard";
/**
 * BasePlayerArcade
 * @classdesc Base Arcade "Player" which basically is just the base arcade sprite with a reference to the keys
 * @property {StandardKeyboardInput} keys
 */
export default class BasePlayerArcade extends BaseArcadeSprite {
    keys: StandardKeyboardInput;
    constructor(scene: Phaser.Scene, x: number, y: number, key: string);
}
/**
 * Top Down Player
 * Need to call update to get movement working in sc
 */
export declare class TopDownPlayer extends BasePlayerArcade {
    speed: number;
    constructor(scene: Phaser.Scene, x: any, y: any, key: any, speed: any);
    update(): void;
}
/**
 * TopDownPlayerWithRotation
 * @classdesc Base TopDown "Player" with rotation and top down WASD movement.
 * @property {StandardKeyboardInput} keys
 */
export declare class TopDownPlayerWithRotation extends BasePlayerArcade {
    private speed;
    constructor(scene: Phaser.Scene, x: any, y: any, key: any, speed: any);
    update(): void;
}
/**
 * rotateToCursor
 * Rotates the passed in sprite body to input.activePointer's x and y.
 * Should be called in an update function
 * @param {BaseArcadeSprite} sprite - Arcade sprite
 */
export declare function rotateToCursor(sprite: BaseArcadeSprite): void;
/**
 * Top Down Movement function
 * takes in a player object and does up/down/left/right along with ne/nw/se/sw movement.
 * @param {BasePlayerArcade} sprite - sprite enabled for interactivity with standard top down input keys
 * @param {number} speed - number
 */
export declare function topDownMovement(sprite: BasePlayerArcade, speed: number): void;

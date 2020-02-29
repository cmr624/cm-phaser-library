import { BaseArcadeSprite } from './../base';
import { StandardKeyboardInput } from "../../input/standard";

/**
 * BasePlayerArcade
 * @classdesc Base Arcade "Player" which basically is just the base arcade sprite with a reference to the keys
 * @property {StandardKeyboardInput} keys
 */
export default class BasePlayerArcade extends BaseArcadeSprite {
    keys : StandardKeyboardInput;
    constructor(scene : Phaser.Scene, x : number, y : number, key : string){
        super(scene, x, y, key);
        this.keys = new StandardKeyboardInput(this.scene);
    }
}

/**
 * Top Down Player
 * Need to call update to get movement working in sc
 */
export class TopDownPlayer extends BasePlayerArcade {
    speed : number;
    constructor(scene : Phaser.Scene, x, y, key, speed) {
        super(scene, x, y, key);
        this.speed = speed;
    }
    
    update(){
        super.update();
        topDownMovement(this, this.speed);
    }
}
/**
 * TopDownPlayerWithRotation
 * @classdesc Base TopDown "Player" with rotation and top down WASD movement.
 * @property {StandardKeyboardInput} keys
 */
export class TopDownPlayerWithRotation extends BasePlayerArcade {
    private speed : number;
    constructor(scene : Phaser.Scene, x, y, key, speed) {
        super(scene, x, y, key);
        this.speed = speed;
    }
    update() {
        rotateToCursor(this);
        topDownMovement(this, this.speed);
    }
}


/**
 * rotateToCursor
 * Rotates the passed in sprite body to input.activePointer's x and y. 
 * Should be called in an update function
 * @param {BaseArcadeSprite} sprite - Arcade sprite
 */
export function rotateToCursor(sprite : BaseArcadeSprite) : void {
    sprite.scene.input.activePointer.updateWorldPoint(sprite.scene.cameras.main);
    sprite.setRotation(Phaser.Math.Angle.Between(sprite.x, sprite.y, sprite.scene.input.activePointer.worldX, sprite.scene.input.activePointer.worldY) + Phaser.Math.DegToRad(90));
}

/**
 * Top Down Movement function
 * takes in a player object and does up/down/left/right along with ne/nw/se/sw movement.
 * @param {BasePlayerArcade} sprite - sprite enabled for interactivity with standard top down input keys
 * @param {number} speed - number
 */
export function topDownMovement(sprite : BasePlayerArcade, speed : number)  : void {
    let v = diagonalVelocity(speed)
    // TOP RIGHT
    if (sprite.keys.rightPressed() && sprite.keys.upPressed())
    {
        sprite.setVelocity(v, -v);
    }
    // BOT RIGHT
    else if (sprite.keys.rightPressed() && sprite.keys.downPressed())
    {
        sprite.setVelocity(v, v);
    }
    // BOT LEFT
    else if (sprite.keys.leftPressed() && sprite.keys.downPressed()) {
        sprite.setVelocity(-v, v);
    }
    // TOP LEFT
    else if (sprite.keys.leftPressed() && sprite.keys.upPressed())
    {
        sprite.setVelocity(-v, -v);
    }
    else if (sprite.keys.leftPressed()) {
        sprite.setVelocity(-speed, 0);
    }
    else if (sprite.keys.rightPressed())
    {
        sprite.setVelocity(speed, 0);
    }
    else if (sprite.keys.downPressed()) {
        sprite.setVelocity(0,speed);
    }
    else if (sprite.keys.upPressed()) {
        sprite.setVelocity(0, -speed);
    }
    else {
        sprite.setVelocity(0, 0);
    }
}
/**
 * diagonal velocity
 * I don't know if this is right, but i feel like this works. 
 * ???? 1 / sq rt(2) ~ .7 which makes sense? triangles? i think!!!
 * @param {number} speed 
 * @returns {number} hypotenuse velocity of the speed
 */
function diagonalVelocity(speed : number) : number{
    return speed * Math.SQRT1_2;
}



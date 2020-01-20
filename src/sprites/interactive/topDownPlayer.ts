import { BaseArcadeSprite } from './../base';
import { StandardKeyboardInput } from "../../input/standard";

export default class BasePlayerArcade extends BaseArcadeSprite {

    keys : StandardKeyboardInput;
    constructor(scene : Phaser.Scene, x : number, y : number, key : string){
        super(scene, x, y, key);
        this.keys = new StandardKeyboardInput(this.scene);
    }
}

export class TopDownPlayerWithRotation extends BasePlayerArcade {
    speed : number;
    constructor(scene : Phaser.Scene, x, y, key, speed) {
        super(scene, x, y, key);
        this.speed = speed;
    }

    update() {
        rotateToCursor(this);
        topDownMovement(this, this.speed);
    }

}

export function rotateToCursor(sprite : BasePlayerArcade) {
    sprite.scene.input.activePointer.updateWorldPoint(sprite.scene.cameras.main);
    sprite.setRotation(Phaser.Math.Angle.Between(sprite.x, sprite.y, sprite.scene.input.activePointer.worldX, sprite.scene.input.activePointer.worldY) + Phaser.Math.DegToRad(90));
}

export function topDownMovement(sprite : BasePlayerArcade, speed) {
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

function diagonalVelocity(speed : number) {
    return speed * Math.SQRT1_2;
}

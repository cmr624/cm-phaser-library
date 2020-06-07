"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var base_1 = require("./../base");
var standard_1 = require("../../input/standard");
/**
 * BasePlayerArcade
 * @classdesc Base Arcade "Player" which basically is just the base arcade sprite with a reference to the keys
 * @property {StandardKeyboardInput} keys
 */
var BasePlayerArcade = /** @class */ (function (_super) {
    __extends(BasePlayerArcade, _super);
    function BasePlayerArcade(scene, x, y, key) {
        var _this = _super.call(this, scene, x, y, key) || this;
        _this.keys = new standard_1.StandardKeyboardInput(_this.scene);
        return _this;
    }
    return BasePlayerArcade;
}(base_1.BaseArcadeSprite));
exports.default = BasePlayerArcade;
/**
 * Top Down Player
 * Need to call update to get movement working in sc
 */
var TopDownPlayer = /** @class */ (function (_super) {
    __extends(TopDownPlayer, _super);
    function TopDownPlayer(scene, x, y, key, speed) {
        var _this = _super.call(this, scene, x, y, key) || this;
        _this.speed = speed;
        return _this;
    }
    TopDownPlayer.prototype.update = function () {
        _super.prototype.update.call(this);
        topDownMovement(this, this.speed);
    };
    return TopDownPlayer;
}(BasePlayerArcade));
exports.TopDownPlayer = TopDownPlayer;
/**
 * TopDownPlayerWithRotation
 * @classdesc Base TopDown "Player" with rotation and top down WASD movement.
 * @property {StandardKeyboardInput} keys
 */
var TopDownPlayerWithRotation = /** @class */ (function (_super) {
    __extends(TopDownPlayerWithRotation, _super);
    function TopDownPlayerWithRotation(scene, x, y, key, speed) {
        var _this = _super.call(this, scene, x, y, key) || this;
        _this.speed = speed;
        return _this;
    }
    TopDownPlayerWithRotation.prototype.update = function () {
        rotateToCursor(this);
        topDownMovement(this, this.speed);
    };
    return TopDownPlayerWithRotation;
}(BasePlayerArcade));
exports.TopDownPlayerWithRotation = TopDownPlayerWithRotation;
/**
 * rotateToCursor
 * Rotates the passed in sprite body to input.activePointer's x and y.
 * Should be called in an update function
 * @param {BaseArcadeSprite} sprite - Arcade sprite
 */
function rotateToCursor(sprite) {
    sprite.scene.input.activePointer.updateWorldPoint(sprite.scene.cameras.main);
    sprite.setRotation(Phaser.Math.Angle.Between(sprite.x, sprite.y, sprite.scene.input.activePointer.worldX, sprite.scene.input.activePointer.worldY) + Phaser.Math.DegToRad(90));
}
exports.rotateToCursor = rotateToCursor;
/**
 * Top Down Movement function
 * takes in a player object and does up/down/left/right along with ne/nw/se/sw movement.
 * @param {BasePlayerArcade} sprite - sprite enabled for interactivity with standard top down input keys
 * @param {number} speed - number
 */
function topDownMovement(sprite, speed) {
    var v = diagonalVelocity(speed);
    // TOP RIGHT
    if (sprite.keys.rightPressed() && sprite.keys.upPressed()) {
        sprite.setVelocity(v, -v);
    }
    // BOT RIGHT
    else if (sprite.keys.rightPressed() && sprite.keys.downPressed()) {
        sprite.setVelocity(v, v);
    }
    // BOT LEFT
    else if (sprite.keys.leftPressed() && sprite.keys.downPressed()) {
        sprite.setVelocity(-v, v);
    }
    // TOP LEFT
    else if (sprite.keys.leftPressed() && sprite.keys.upPressed()) {
        sprite.setVelocity(-v, -v);
    }
    else if (sprite.keys.leftPressed()) {
        sprite.setVelocity(-speed, 0);
    }
    else if (sprite.keys.rightPressed()) {
        sprite.setVelocity(speed, 0);
    }
    else if (sprite.keys.downPressed()) {
        sprite.setVelocity(0, speed);
    }
    else if (sprite.keys.upPressed()) {
        sprite.setVelocity(0, -speed);
    }
    else {
        sprite.setVelocity(0, 0);
    }
}
exports.topDownMovement = topDownMovement;
/**
 * diagonal velocity
 * I don't know if this is right, but i feel like this works.
 * ???? 1 / sq rt(2) ~ .7 which makes sense? triangles? i think!!!
 * @param {number} speed
 * @returns {number} hypotenuse velocity of the speed
 */
function diagonalVelocity(speed) {
    return speed * Math.SQRT1_2;
}
//# sourceMappingURL=topDownPlayer.js.map
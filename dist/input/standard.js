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
/**
 * StandardKeyboardInput
 * This class exists in a specific scene, and can be extended with useful key functions.
 * For now, Up/Down/Left/Right pressed accounts for both arrow keys and WASD.
 * @class StandardKeyboardInput
 * @property {StandardInputKeys} keys - keys WASD / ARROW KEYS / SPACE / SHIFT
 */
var StandardKeyboardInput = /** @class */ (function (_super) {
    __extends(StandardKeyboardInput, _super);
    function StandardKeyboardInput(scene) {
        var _this = _super.call(this, scene, 'KeyboardInput') || this;
        scene.add.existing(_this);
        _this.keys = scene.input.keyboard.addKeys('W,S,A,D,UP,SPACE,LEFT,RIGHT,DOWN,SHIFT');
        return _this;
    }
    /**
     * upPressed
     * 'UP' is pressed, defined with up arrow and 'w'
     * @returns {boolean} isDown
     */
    StandardKeyboardInput.prototype.upPressed = function () {
        return (this.keys.UP.isDown || this.keys.W.isDown);
    };
    /**
     * downPressed
     * 'DOWN' is pressed, defined with down arrow and 's'
     * @returns {boolean} isDown
     */
    StandardKeyboardInput.prototype.downPressed = function () {
        return (this.keys.DOWN.isDown || this.keys.S.isDown);
    };
    /**
     * rightPressed
     * 'RIGHT' is pressed, defined with right arrow and 'd'
     * @returns {boolean} isDown
     */
    StandardKeyboardInput.prototype.rightPressed = function () {
        return (this.keys.RIGHT.isDown || this.keys.D.isDown);
    };
    /**
     * leftPressed
     * 'LEFT' is pressed, defined with left arrow and 'a'
     * @returns {boolean} isDown
     */
    StandardKeyboardInput.prototype.leftPressed = function () {
        return (this.keys.LEFT.isDown || this.keys.A.isDown);
    };
    /**
     * Unnecessary but u get the point
     */
    StandardKeyboardInput.prototype.spacePressed = function () {
        return (this.keys.SPACE.isDown);
    };
    return StandardKeyboardInput;
}(Phaser.GameObjects.GameObject));
exports.StandardKeyboardInput = StandardKeyboardInput;
//# sourceMappingURL=standard.js.map
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
 * Base Sprite
 * @property {Phaser.Scene} scene a reference to the current scene the sprite exists in
 */
var BaseSprite = /** @class */ (function (_super) {
    __extends(BaseSprite, _super);
    /**
     * Base Sprite, adds to current scene and keeps a reference to the current scene.
     *
     */
    function BaseSprite(scene, x, y, key) {
        var _this = _super.call(this, scene, x, y, key) || this;
        _this.scene = scene;
        _this.scene.add.existing(_this);
        return _this;
    }
    return BaseSprite;
}(Phaser.GameObjects.Sprite));
exports.BaseSprite = BaseSprite;
/**
 * Base Arcade Sprite
 * Adds the sprite to the current scene and enables it for physics.
 * @property {Phaser.Scene} scene a reference to the current scene the sprite exists in
 */
var BaseArcadeSprite = /** @class */ (function (_super) {
    __extends(BaseArcadeSprite, _super);
    function BaseArcadeSprite(scene, x, y, key) {
        var _this = _super.call(this, scene, x, y, key) || this;
        _this.scene = scene;
        _this.scene.physics.world.enable(_this);
        _this.scene.add.existing(_this);
        return _this;
    }
    return BaseArcadeSprite;
}(Phaser.Physics.Arcade.Sprite));
exports.BaseArcadeSprite = BaseArcadeSprite;
//# sourceMappingURL=base.js.map
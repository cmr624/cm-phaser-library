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
//NOT IMPLEMENTED YET
var base_1 = require("./../sprites/base");
/**
 * Round Rectangle Sprite
 * Based on a graphics rectangle object.
 */
var RoundedRectangleSprite = /** @class */ (function (_super) {
    __extends(RoundedRectangleSprite, _super);
    function RoundedRectangleSprite(scene, x, y, width, height) {
        var _this = _super.call(this, scene, x, y, '') || this;
        _this.rectangleGraphics = new RoundedRectangle(scene, { width: width, height: height });
        _this.setTexture('roundedRect');
        _this.setOrigin(.5);
        return _this;
    }
    return RoundedRectangleSprite;
}(base_1.BaseSprite));
/**
 * RoundedRectangle
 * This guy draws a rounded rectangle, creates a texture for it, and destroys itself. Word.
 * Also, be careful because this is a proof of concept and is kind of hacky.
 * @extends {Phaser.GameObjects.Graphics} graphics
 */
var RoundedRectangle = /** @class */ (function (_super) {
    __extends(RoundedRectangle, _super);
    function RoundedRectangle(scene, rectObj, radius) {
        var _this = _super.call(this, scene) || this;
        _this.scene.add.existing(_this);
        //light blue and "bold" stroke
        _this.lineStyle(20, 0x000000);
        _this.fillStyle(0xadd8e6);
        //TODO: hacky, figure out some math that figures out why it messes up
        _this.shapeGraphic = _this.fillRoundedRect(2.5, 2.5, rectObj.width + 5, rectObj.height + 5, 20);
        _this.strokeGraphic = _this.strokeRoundedRect(10, 10, rectObj.width, rectObj.height, 20);
        _this.generateTexture('roundedRect', rectObj.width + 20, rectObj.height + 20);
        _this.destroy();
        return _this;
    }
    return RoundedRectangle;
}(Phaser.GameObjects.Graphics));
//TODO: Implement popup
var Popup = /** @class */ (function (_super) {
    __extends(Popup, _super);
    function Popup(scene, x, y, width, height) {
        return _super.call(this, scene, x, y, width, height) || this;
    }
    return Popup;
}(RoundedRectangleSprite));
exports.Popup = Popup;
//graveyard
//this.fillRect(rectObj.x, rectObj.y, rectObj.width, rectObj.height);
//graphics.fillRoundedRect(x, y, width, height, radius);
//this.strokeRect(rectObj.x, rectObj.y, rectObj.width, rectObj.height);
//# sourceMappingURL=popup.js.map
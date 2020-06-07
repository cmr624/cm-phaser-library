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
var base_1 = require("../../sprites/base");
var tabbable_1 = require("./tabbable");
/**
 * Base Accessible Sprite
 * @property {BaseEDUScene} scene a reference to the current scene the sprite exists in
 */
var AccessibleSpriteButton = /** @class */ (function (_super) {
    __extends(AccessibleSpriteButton, _super);
    /**
     * Base Accessible Sprite
     * Contains a DOM element that has the same width / height as our button
     *
     */
    function AccessibleSpriteButton(scene, x, y, key) {
        var _this = _super.call(this, scene, x, y, key) || this;
        _this.scene = scene;
        _this.name = key;
        var el = tabbable_1.createDiv(_this.height, _this.width);
        el.onkeydown = (function (e) {
            if ((e.which === 13) || (e.which === 32)) {
                _this.clickFunction ? _this.clickFunction() : undefined;
            }
        });
        _this.domElement = _this.scene.add.dom(x, y, el);
        _this.showDOMElement();
        _this.domElement.setScrollFactor(0);
        return _this;
    }
    AccessibleSpriteButton.prototype.setClick = function (fn) {
        this.setInteractive();
        this.on('pointerdown', function () {
            fn();
        });
        this.clickFunction = fn;
    };
    AccessibleSpriteButton.prototype.moveDOMElement = function (x, y) {
        this.domElement.setPosition(x, y);
    };
    AccessibleSpriteButton.prototype.hideDOMElement = function () {
        this.domElement.tabIndex = -1;
        this.domElement.setVisible(false);
    };
    AccessibleSpriteButton.prototype.showDOMElement = function () {
        this.domElement.tabIndex = 0;
        this.domElement.setVisible(true);
    };
    return AccessibleSpriteButton;
}(base_1.BaseSprite));
exports.AccessibleSpriteButton = AccessibleSpriteButton;
//# sourceMappingURL=accessibleSprite.js.map
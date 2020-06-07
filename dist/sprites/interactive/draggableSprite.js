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
var base_1 = require("../base");
var container_1 = require("../../base/container");
var DraggableSprite = /** @class */ (function (_super) {
    __extends(DraggableSprite, _super);
    function DraggableSprite(scene, x, y, key, dragEnd) {
        var _this = _super.call(this, scene, x, y, key) || this;
        _this.dragEnd = dragEnd;
        _this.setInteractive();
        _this.scene.input.setDraggable(_this);
        return _this;
    }
    DraggableSprite.prototype.dragStart = function () {
        //console.log('entered drag');
    };
    DraggableSprite.prototype.drop = function () {
        //console.log('left drag');
    };
    return DraggableSprite;
}(base_1.BaseSprite));
exports.DraggableSprite = DraggableSprite;
//TODO : Make abstract? does it matter?
var DraggableContainer = /** @class */ (function (_super) {
    __extends(DraggableContainer, _super);
    function DraggableContainer(scene, x, y, children) {
        return _super.call(this, scene, x, y, children) || this;
    }
    DraggableContainer.prototype.initInteractive = function () {
        this.setInteractive();
        this.scene.input.setDraggable(this);
    };
    DraggableContainer.prototype.dragStart = function () {
    };
    DraggableContainer.prototype.drop = function () {
    };
    DraggableContainer.prototype.dropOnTarget = function (dropZone) {
    };
    return DraggableContainer;
}(container_1.BaseContainer));
exports.DraggableContainer = DraggableContainer;
//# sourceMappingURL=draggableSprite.js.map
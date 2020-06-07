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
var DraggableManager = /** @class */ (function (_super) {
    __extends(DraggableManager, _super);
    function DraggableManager(scene) {
        var _this = _super.call(this, scene, 'draggableManager') || this;
        _this.scene = scene;
        _this.scene.add.existing(_this);
        _this.scene.input.on('drag', _this.drag);
        _this.scene.input.on('dragstart', _this.dragStart);
        _this.scene.input.on('pointerup', _this.drop);
        _this.scene.input.on('drop', _this.dropOnTarget);
        return _this;
    }
    /**
     *
     * @param pointer
     * @param gameObject
     * @param dragX
     * @param dragY
     */
    DraggableManager.prototype.drag = function (pointer, go, dragX, dragY) {
        go.x = dragX;
        go.y = dragY;
    };
    DraggableManager.prototype.dropOnTarget = function (pointer, gameObject, dropZone) {
        // console.log('drop');
        // console.log(dropZone);
        gameObject === null || gameObject === void 0 ? void 0 : gameObject.dropOnTarget(dropZone);
    };
    DraggableManager.prototype.dragStart = function (pointer, go) {
        go === null || go === void 0 ? void 0 : go.dragStart();
        this.currentGameObject = go;
    };
    DraggableManager.prototype.drop = function () {
        var _a;
        (_a = this.currentGameObject) === null || _a === void 0 ? void 0 : _a.drop();
        this.currentGameObject = undefined;
    };
    return DraggableManager;
}(Phaser.GameObjects.GameObject));
exports.default = DraggableManager;
//# sourceMappingURL=draggableManager.js.map
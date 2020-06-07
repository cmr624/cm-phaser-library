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
 * Base Container to extend from
 */
var BaseContainer = /** @class */ (function (_super) {
    __extends(BaseContainer, _super);
    function BaseContainer(scene, x, y, children) {
        var _this = _super.call(this, scene, x, y, children ? children : undefined) || this;
        _this.scene = scene;
        _this.scene.add.existing(_this);
        return _this;
    }
    return BaseContainer;
}(Phaser.GameObjects.Container));
exports.BaseContainer = BaseContainer;
//# sourceMappingURL=container.js.map
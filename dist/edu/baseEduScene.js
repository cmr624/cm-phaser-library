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
var subtitleManager_1 = require("./subtitleManager");
var EDUSceneTemplate = /** @class */ (function (_super) {
    __extends(EDUSceneTemplate, _super);
    function EDUSceneTemplate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EDUSceneTemplate;
}(Phaser.Scene));
var BaseEDUScene = /** @class */ (function (_super) {
    __extends(BaseEDUScene, _super);
    function BaseEDUScene(key) {
        return _super.call(this, { key: key }) || this;
    }
    BaseEDUScene.prototype.initializeSubtitleManager = function () {
        //should load from JSON
        var dict = new Map();
        dict['correct'] = '(Correct Sound)';
        dict['goodWork'] = 'Good Work!';
        this.subtitleManager.initializeSubtitlesFromAudio(dict);
    };
    BaseEDUScene.prototype.create = function () {
        this.initializeSubtitleManager();
        this.subtitleContainer = new subtitleManager_1.SubtitleContainer(this, 800, 1000).setDepth(99);
        //this.add.container(800, 1000).setDepth(99);//.setScrollFactor(0);       
    };
    return BaseEDUScene;
}(EDUSceneTemplate));
exports.default = BaseEDUScene;
//# sourceMappingURL=baseEduScene.js.map
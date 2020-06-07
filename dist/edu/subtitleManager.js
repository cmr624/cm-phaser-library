"use strict";
// function playSound(scene)
// sound with subtitle dictionary
// .mp3 : "subtitle"
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
var textStyles_1 = require("../objects/textStyles");
var container_1 = require("../base/container");
var SubtitleManager = /** @class */ (function (_super) {
    __extends(SubtitleManager, _super);
    function SubtitleManager(pluginManager) {
        return _super.call(this, pluginManager) || this;
    }
    SubtitleManager.prototype.initializeSubtitlesFromAudio = function (dict) {
        // key of audio, subtitle words
        this.subtitleDictionary = dict;
    };
    SubtitleManager.prototype.addSubtitle = function (scene, string) {
        scene.subtitleContainer.addSubtitle(scene.add.text(0, 0, string, textStyles_1.defaultText).setOrigin(.5));
    };
    SubtitleManager.prototype.playAudio = function (scene, key) {
        var soundEffect = scene.sound.add(key);
        this.addSubtitle(scene, this.subtitleDictionary[key]);
        soundEffect.play();
        return soundEffect;
    };
    return SubtitleManager;
}(Phaser.Plugins.BasePlugin));
exports.default = SubtitleManager;
var SubtitleContainer = /** @class */ (function (_super) {
    __extends(SubtitleContainer, _super);
    function SubtitleContainer(scene, x, y, children) {
        var _this = _super.call(this, scene, x, y, children) || this;
        _this.timeSubtitleDisplayedMs = 2000;
        _this.queue = new Array();
        _this.setScrollFactor(0);
        return _this;
    }
    SubtitleContainer.prototype.clearQueue = function () {
        this.queue.forEach(function (e) { return e.destroy(); });
        this.queue = [];
    };
    SubtitleContainer.prototype.addSubtitle = function (text) {
        var _this = this;
        if (this.queue.length > 0) {
            //move everyone on the queue up by 50 px
            this.queue.forEach(function (e) { return e.y -= 50; });
        }
        this.queue.unshift(text);
        this.add(text);
        setTimeout(function () {
            var _a;
            (_a = _this.queue.pop()) === null || _a === void 0 ? void 0 : _a.destroy();
        }, this.timeSubtitleDisplayedMs);
    };
    SubtitleContainer.prototype.hideSubtitleContainer = function () {
        this.setVisible(false);
    };
    SubtitleContainer.prototype.showSubtitleContainer = function () {
        this.setVisible(true);
    };
    return SubtitleContainer;
}(container_1.BaseContainer));
exports.SubtitleContainer = SubtitleContainer;
//# sourceMappingURL=subtitleManager.js.map
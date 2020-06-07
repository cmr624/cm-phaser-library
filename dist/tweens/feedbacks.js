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
 * @class FeedbackTween
 * @classdesc A tween on an interactive gameobject that disables interactivity on start, and enables it back on end.
 * Common examples of this type of tween would be for on-click tweens, like bouncing a button etc. This (seems ???????) like
 * the easiest way to prevent multiple tweens to execute on the same gameobject but im probably wrong
 */
var FeedbackTween = /** @class */ (function () {
    function FeedbackTween(scene, targets) {
        var _this = this;
        this.scene = scene;
        this.config = {};
        this.config.targets = targets;
        this.config.onStart = function () { return _this.config.targets.forEach(function (e) {
            e.disableInteractive();
        }); };
        this.config.onComplete = function () { return _this.config.targets.forEach(function (e) {
            e.setInteractive();
        }); };
        this.config.yoyo = true;
    }
    //execute tween on the current scene
    FeedbackTween.prototype.start = function () {
        this.scene.add.tween(this.config);
    };
    return FeedbackTween;
}());
exports.FeedbackTween = FeedbackTween;
/**
 * Scale Feedback
 * An example of a feedback tween, which bumps the scale to 1 -> 1.2 -> 1 for the duration (*2 because yoyo).
 */
var ScaleFeedback = /** @class */ (function (_super) {
    __extends(ScaleFeedback, _super);
    function ScaleFeedback(scene, targets, duration, scale) {
        var _this = _super.call(this, scene, targets) || this;
        _this.config.duration = duration ? duration : 200;
        _this.config.scale = scale ? scale : 1.2;
        _this.start();
        return _this;
    }
    return ScaleFeedback;
}(FeedbackTween));
exports.ScaleFeedback = ScaleFeedback;
//# sourceMappingURL=feedbacks.js.map
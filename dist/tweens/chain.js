"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var async_1 = require("../utils/async");
/**
 * TweenChain Class
 * Allows us to instantiate however many tweens we want in the array and execute them syncronously. !!! YAY
 * This was an implementation that @yandeu did for an example in the forum.
 * I just took the functionality and generalized it so we can use it as a chaining object
 * By default, it starts the tween chain on instantiation.
 * @author yandeu - //TODO: should include link where this was adapted from
 * @property {Array} array tweens to execute synchronously.
 */
var TweenChain = /** @class */ (function () {
    function TweenChain(scene, array, onFinished) {
        var _this = this;
        this.scene = scene;
        this.onFinished = onFinished;
        /**
         * private tweensAsync
         * Pass in a tween config object, and create a promise that creates a tween that
         * on complete, resolves the promise
         * //TODO: This pattern generally seems useful for avoiding giant callback nesting so we should research promise structure for other gameobjects.
         */
        this.tweensAsync = function (config) {
            return new Promise(function (resolve) {
                _this.scene.tweens.add(__assign(__assign({}, config), { onComplete: function () {
                        if (config.onComplete)
                            config.onComplete();
                        resolve();
                    } }));
            });
        };
        this.array = array;
        this.startTweens();
    }
    TweenChain.prototype.startTweens = function () {
        async_1.asyncForEach(this.array, this.tweensAsync, this.onFinished);
    };
    return TweenChain;
}());
exports.default = TweenChain;
//# sourceMappingURL=chain.js.map
"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("phaser");
var container_1 = require("./base/container");
exports.BaseContainer = container_1.BaseContainer;
var worldCoords_1 = require("./editor/worldCoords");
exports.displayAndCopyCoords = worldCoords_1.displayAndCopyCoords;
var utils = __importStar(require("./utils/index"));
exports.utils = utils;
var damage_1 = require("./gameplay/damage");
exports.Damageable = damage_1.Damageable;
var standardInput = __importStar(require("./input/standard"));
exports.standardInput = standardInput;
var draggableManager_1 = __importDefault(require("./managers/draggableManager"));
exports.DraggableManager = draggableManager_1.default;
var textStyles = __importStar(require("./objects/textStyles"));
exports.textStyles = textStyles;
var tdPlayer = __importStar(require("./sprites/interactive/topDownPlayer"));
exports.tdPlayer = tdPlayer;
var draggableSprite_1 = require("./sprites/interactive/draggableSprite");
exports.DraggableSprite = draggableSprite_1.DraggableSprite;
var baseSprite = __importStar(require("./sprites/base"));
exports.baseSprite = baseSprite;
var chain_1 = __importDefault(require("./tweens/chain"));
exports.TweenChain = chain_1.default;
var feedbacks = __importStar(require("./tweens/feedbacks"));
exports.feedbacks = feedbacks;
//create phaser games / scenes etc. to test here!
//# sourceMappingURL=main.js.map
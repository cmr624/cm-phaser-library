import 'phaser';
import { BaseContainer } from "./base/container";
import { displayAndCopyCoords } from "./editor/worldCoords";
import * as utils from './utils/index';
import { Damageable } from './gameplay/damage';
import * as standardInput from './input/standard';
import DraggableManager from './managers/draggableManager';
import * as textStyles from './objects/textStyles'
import * as tdPlayer from './sprites/interactive/topDownPlayer';
import { DraggableSprite } from './sprites/interactive/draggableSprite';
import * as baseSprite from './sprites/base';
import TweenChain from './tweens/chain';
import * as feedbacks from './tweens/feedbacks';
export {
    BaseContainer,
    displayAndCopyCoords,
    Damageable,
    standardInput,
    DraggableManager,
    textStyles,
    tdPlayer,
    DraggableSprite,
    baseSprite,
    TweenChain,
    feedbacks,   
    utils,
}
//create phaser games / scenes etc. to test here!
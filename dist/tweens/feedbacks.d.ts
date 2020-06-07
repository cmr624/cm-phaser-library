/**
 * @class FeedbackTween
 * @classdesc A tween on an interactive gameobject that disables interactivity on start, and enables it back on end.
 * Common examples of this type of tween would be for on-click tweens, like bouncing a button etc. This (seems ???????) like
 * the easiest way to prevent multiple tweens to execute on the same gameobject but im probably wrong
 */
export declare class FeedbackTween {
    config: Phaser.Types.Tweens.TweenBuilderConfig | any;
    scene: Phaser.Scene;
    constructor(scene: Phaser.Scene, targets: Array<Phaser.GameObjects.GameObject> | Phaser.GameObjects.GameObject);
    start(): void;
}
/**
 * Scale Feedback
 * An example of a feedback tween, which bumps the scale to 1 -> 1.2 -> 1 for the duration (*2 because yoyo).
 */
export declare class ScaleFeedback extends FeedbackTween {
    constructor(scene: Phaser.Scene, targets: Array<Phaser.GameObjects.GameObject>, duration?: number, scale?: number);
}

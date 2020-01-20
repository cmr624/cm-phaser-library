/**
 * @class FeedbackTween
 * @classdesc A tween on an interactive gameobject that disables interactivity on start, and enables it back on end.
 * Common examples of this type of tween would be for on-click tweens, like bouncing a button etc. This (seems ???????) like
 * the easiest way to prevent multiple tweens to execute on the same gameobject but im probably wrong
 */
class FeedbackTween{
    public config : Phaser.Types.Tweens.TweenBuilderConfig | any  ;
    scene : Phaser.Scene;
    constructor(scene : Phaser.Scene, targets : Array<Phaser.GameObjects.GameObject> | Phaser.GameObjects.GameObject) {
        this.scene = scene;
        this.config = {};
        this.config.targets = targets;
        this.config.onStart = () => this.config.targets.forEach((e : Phaser.GameObjects.GameObject) => {
            e.disableInteractive();
        });
        this.config.onComplete = () => this.config.targets.forEach((e : Phaser.GameObjects.GameObject) => {
            e.setInteractive();
        });
        this.config.yoyo = true;
        
    }
    //execute tween on the current scene
    start() {
        this.scene.add.tween(this.config);
    }
}

/**
 * Scale Feedback
 * An example of a feedback tween, which bumps the scale to 1 -> 1.2 -> 1 for the duration (*2 because yoyo).
 */
export class ScaleFeedback extends FeedbackTween {
    constructor(scene : Phaser.Scene, targets : Array<Phaser.GameObjects.GameObject>, duration? : number, scale?: number){
        super(scene, targets);
        this.config.duration = duration ? duration : 200;
        this.config.scale = scale ? scale : 1.2;
        this.start();
    }
}
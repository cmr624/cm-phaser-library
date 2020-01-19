import { GameObjects } from "phaser";

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

    start() {
        this.scene.add.tween(this.config);
    }
}

export class ScaleFeedback extends FeedbackTween {
    constructor(scene : Phaser.Scene, targets : Array<Phaser.GameObjects.GameObject>, duration? : number, scale?: number){
        super(scene, targets);
        this.config.duration = duration ? duration : 200;
        this.config.scale = scale ? scale : 1.2;
        this.start();
    }
}
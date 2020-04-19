import SubtitleManager from "./subtitleManager";
import { BaseContainer } from "../base/container";

abstract class EDUSceneTemplate extends Phaser.Scene {
    subtitleManager! : SubtitleManager;
}

export default class BaseEDUScene extends EDUSceneTemplate {
    // accessibility plugin
    // sound / subtitle plugin
    // menu bar plugin
    // analytics plugin (?)

    subtitleContainer : SubtitleContainer;

    constructor(key){
        super({key : key});
    }

    initializeSubtitleManager(){
        let dict : Map<string, string> = new Map<string, string>();
        dict['correct'] = '(Correct Sound)';
        dict['goodWork'] = 'Good Work!';
        this.subtitleManager.initializeSubtitlesFromAudio(dict);
    }

    create(){
        this.initializeSubtitleManager();
        this.subtitleContainer = new SubtitleContainer(this, 800, 1000).setDepth(99);
        //this.add.container(800, 1000).setDepth(99);//.setScrollFactor(0);       

    }
}

export class SubtitleContainer extends BaseContainer {
    stack : Array<Phaser.GameObjects.Text>;

    constructor(scene, x, y, children?){
        super(scene, x, y, children!);
        this.stack = new Array<Phaser.GameObjects.Text>();
    }

    addSubtitle(text : Phaser.GameObjects.Text){
        if (this.stack.length > 0) {
            //move everyone on the stack up by 50 px
            this.stack.forEach((e) => e.y -= 50);
        }
        this.stack.push(text);
        this.add(text);
        setTimeout(() => {
            this.stack.reverse();
            this.stack.pop()?.destroy();
            this.stack.reverse();
        }, 2000);

    }


}
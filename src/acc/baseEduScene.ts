import SubtitleManager, {SubtitleContainer} from "./subtitleManager";

abstract class EDUSceneTemplate extends Phaser.Scene {
    subtitleManager! : SubtitleManager;
    rexUI!:any;
}

export default class BaseEDUScene extends EDUSceneTemplate {
    // accessibility plugin
    // sound / subtitle plugin
    // menu bar plugin
    // analytics plugin (?)

    subtitleContainer? : SubtitleContainer;

    constructor(key){
        super({key : key});
    }

    initializeSubtitleManager(){
        //should load from JSON
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


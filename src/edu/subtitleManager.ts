// function playSound(scene)
// sound with subtitle dictionary
// .mp3 : "subtitle"

import BaseEDUScene from "./baseEduScene";
import { defaultText } from "../objects/textStyles";
import { BaseContainer } from "../base/container";
export default class SubtitleManager extends Phaser.Plugins.BasePlugin {

    subtitleDictionary : Map<string, string>;
    constructor(pluginManager : Phaser.Plugins.PluginManager){
        super(pluginManager);
    }

    public initializeSubtitlesFromAudio(dict : Map<string, string>){
        // key of audio, subtitle words
        this.subtitleDictionary = dict;
    }

    private addSubtitle(scene: BaseEDUScene, string:string){
        scene.subtitleContainer.addSubtitle(scene.add.text(0, 0, string, defaultText).setOrigin(.5)); 
    }

    playAudio(scene : BaseEDUScene, key : string) {
        let soundEffect : Phaser.Sound.BaseSound = scene.sound.add(key);
        this.addSubtitle(scene, this.subtitleDictionary[key]);
        soundEffect.play();
        return soundEffect;
    }


}

export class SubtitleContainer extends BaseContainer {
    queue : Array<Phaser.GameObjects.Text>;

    timeSubtitleDisplayedMs:number = 2000;

    constructor(scene, x, y, children?){
        super(scene, x, y, children!);
        this.queue = new Array<Phaser.GameObjects.Text>();
        this.setScrollFactor(0);
    }

    clearQueue(){
        this.queue.forEach((e) => e.destroy());
        this.queue = [];
    }

    addSubtitle(text : Phaser.GameObjects.Text){
        if (this.queue.length > 0) {
            //move everyone on the queue up by 50 px
            this.queue.forEach((e) => e.y -= 50);
        }
        this.queue.unshift(text);
        this.add(text);
        
        setTimeout(() => {
            this.queue.pop()?.destroy();
        }, this.timeSubtitleDisplayedMs);
    }
    hideSubtitleContainer(){
        this.setVisible(false);
    }
    showSubtitleContainer(){
        this.setVisible(true);
    }   
}
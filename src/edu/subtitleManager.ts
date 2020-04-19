// function playSound(scene)
// sound with subtitle dictionary
// .mp3 : "subtitle"

import BaseEDUScene from "./baseEduScene";
import { defaultText } from "../objects/textStyles";

export default class SubtitleManager extends Phaser.Plugins.BasePlugin {

    subtitleDictionary : Map<string, string>;
    constructor(pluginManager : Phaser.Plugins.PluginManager){
        super(pluginManager);
    }

    public initializeSubtitlesFromAudio(dict : Map<string, string>){
        // key of audio, subtitle words
        this.subtitleDictionary = dict;
    }

    addSubtitle(scene: BaseEDUScene, string:string){
    
        scene.subtitleContainer.addSubtitle(scene.add.text(0, 0, string, defaultText).setOrigin(.5)); 
    }

    playAudio(scene : BaseEDUScene, key : string) {
        let soundEffect : Phaser.Sound.BaseSound = scene.sound.add(key);
        this.addSubtitle(scene, this.subtitleDictionary[key]);
        soundEffect.play();
        return soundEffect;
    }


}
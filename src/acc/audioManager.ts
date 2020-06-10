import { SubtitleContainer } from "./subtitleManager";

export interface IBaseAudioTracks{
    // music track - any background or gameplay music
    backgroundMusicTrack : Phaser.Sound.BaseSound;
    readonly defaultBgMusicOptions : Phaser.Types.Sound.SoundConfig;
    sfxOptions : Phaser.Types.Sound.SoundConfig;
    subtitleOptions : Phaser.Types.Sound.SoundConfig;
    // sfx track - any sound effects that aren't words that require subtitles
    playSoundEffect(key : string) : Phaser.Sound.BaseSound;
    playSubtitle(key : string) : Phaser.Sound.BaseSound;

    subtitleContainer : SubtitleContainer;
    subtitleDictionary : Map<string, string>;
}

export abstract class BaseAudioExampleScene extends Phaser.Scene implements IBaseAudioTracks{
    backgroundMusicTrack: Phaser.Sound.BaseSound;

    readonly defaultBgMusicOptions : Phaser.Types.Sound.SoundConfig = {
        mute : false,
        volume : .8,
        loop:true,
    };

    sfxOptions : Phaser.Types.Sound.SoundConfig = {
        mute:false,
        volume:1,
    };
    subtitleOptions : Phaser.Types.Sound.SoundConfig={
        mute:false,
        volume:1,
    }
        
    subtitleContainer : SubtitleContainer;
    subtitleDictionary : Map<string, string>;
    constructor(){
        super('preload-scene');
        this.subtitleDictionary = new Map<string, string>();
    }
    
    playSoundEffect(key: string): Phaser.Sound.BaseSound {
        let sound = this.sound.add(key, this.sfxOptions);
        sound.play();
        return sound;
    } 

    playSubtitle(key : string) : Phaser.Sound.BaseSound {
        let subtitleTrack = this.sound.add(key, this.subtitleOptions);
        subtitleTrack.play();
        let text = this.add.text(0, 0, this.subtitleDictionary.get(key)!, {
            color : 'black',
            fontSize:'24px'})
        text.setOrigin(.5);
        this.subtitleContainer.addSubtitle(text);
        return subtitleTrack;
    }

    preload(){
        // img
        this.load.image('bg', '/assets/img/grey-bg.png');

        // mp3
        this.load.audio('correct', '/assets/mp3/correct.mp3');
        this.subtitleDictionary.set('correct', "Correct!");
        this.load.audio('music', '/assets/mp3/bg-music.mp3');
    }

    create(){
        this.subtitleContainer = new SubtitleContainer(this, 800, 800);
        this.backgroundMusicTrack = this.sound.add('music', this.defaultBgMusicOptions);
        this.backgroundMusicTrack.play();
        
    }

}
import BaseEDUScene from "./baseEduScene";
import { BaseContainer } from "../base/container";
export default class SubtitleManager extends Phaser.Plugins.BasePlugin {
    subtitleDictionary: Map<string, string>;
    constructor(pluginManager: Phaser.Plugins.PluginManager);
    initializeSubtitlesFromAudio(dict: Map<string, string>): void;
    private addSubtitle;
    playAudio(scene: BaseEDUScene, key: string): Phaser.Sound.BaseSound;
}
export declare class SubtitleContainer extends BaseContainer {
    queue: Array<Phaser.GameObjects.Text>;
    timeSubtitleDisplayedMs: number;
    constructor(scene: any, x: any, y: any, children?: any);
    clearQueue(): void;
    addSubtitle(text: Phaser.GameObjects.Text): void;
    hideSubtitleContainer(): void;
    showSubtitleContainer(): void;
}

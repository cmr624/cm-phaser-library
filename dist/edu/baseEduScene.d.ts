import SubtitleManager, { SubtitleContainer } from "./subtitleManager";
declare abstract class EDUSceneTemplate extends Phaser.Scene {
    subtitleManager: SubtitleManager;
    rexUI: any;
}
export default class BaseEDUScene extends EDUSceneTemplate {
    subtitleContainer: SubtitleContainer;
    constructor(key: any);
    initializeSubtitleManager(): void;
    create(): void;
}
export {};

import { asyncForEach } from "../utils/async";

export default class TweenChain {
    scene : Phaser.Scene;
    array : [];
    constructor(scene: Phaser.Scene, array) {
        this.scene = scene;
        this.array = array;
        this.startTweens();
    }

    startTweens() {
        asyncForEach(this.array, this.tweensAsync);
    }
  
    
  
    private tweensAsync = (config: { [key: string]: any }): Promise<{}> => {
      return new Promise(resolve => {
        this.scene.tweens.add({
          ...config,
          onComplete: () => {
            if (config.onComplete) config.onComplete()
            resolve()
          }
        })
      })
    }
  }
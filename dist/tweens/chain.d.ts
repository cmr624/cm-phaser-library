/**
 * TweenChain Class
 * Allows us to instantiate however many tweens we want in the array and execute them syncronously. !!! YAY
 * This was an implementation that @yandeu did for an example in the forum.
 * I just took the functionality and generalized it so we can use it as a chaining object
 * By default, it starts the tween chain on instantiation.
 * @author yandeu - //TODO: should include link where this was adapted from
 * @property {Array} array tweens to execute synchronously.
 */
export default class TweenChain {
    scene: Phaser.Scene;
    onFinished?: any;
    private array;
    constructor(scene: Phaser.Scene, array: any, onFinished?: any);
    startTweens(): void;
    /**
     * private tweensAsync
     * Pass in a tween config object, and create a promise that creates a tween that
     * on complete, resolves the promise
     * //TODO: This pattern generally seems useful for avoiding giant callback nesting so we should research promise structure for other gameobjects.
     */
    private tweensAsync;
}

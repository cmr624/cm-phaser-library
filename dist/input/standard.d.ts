export declare type StandardInputKeys = {
    W: Phaser.Input.Keyboard.Key;
    A: Phaser.Input.Keyboard.Key;
    S: Phaser.Input.Keyboard.Key;
    D: Phaser.Input.Keyboard.Key;
    UP: Phaser.Input.Keyboard.Key;
    DOWN: Phaser.Input.Keyboard.Key;
    LEFT: Phaser.Input.Keyboard.Key;
    RIGHT: Phaser.Input.Keyboard.Key;
    SPACE: Phaser.Input.Keyboard.Key;
    SHIFT: Phaser.Input.Keyboard.Key;
};
/**
 * StandardKeyboardInput
 * This class exists in a specific scene, and can be extended with useful key functions.
 * For now, Up/Down/Left/Right pressed accounts for both arrow keys and WASD.
 * @class StandardKeyboardInput
 * @property {StandardInputKeys} keys - keys WASD / ARROW KEYS / SPACE / SHIFT
 */
export declare class StandardKeyboardInput extends Phaser.GameObjects.GameObject {
    keys: StandardInputKeys;
    constructor(scene: Phaser.Scene);
    /**
     * upPressed
     * 'UP' is pressed, defined with up arrow and 'w'
     * @returns {boolean} isDown
     */
    upPressed(): boolean;
    /**
     * downPressed
     * 'DOWN' is pressed, defined with down arrow and 's'
     * @returns {boolean} isDown
     */
    downPressed(): boolean;
    /**
     * rightPressed
     * 'RIGHT' is pressed, defined with right arrow and 'd'
     * @returns {boolean} isDown
     */
    rightPressed(): boolean;
    /**
     * leftPressed
     * 'LEFT' is pressed, defined with left arrow and 'a'
     * @returns {boolean} isDown
     */
    leftPressed(): boolean;
    /**
     * Unnecessary but u get the point
     */
    spacePressed(): boolean;
}

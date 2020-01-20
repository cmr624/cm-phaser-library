//standard input keys 'type', we can add on to this for whatever we feel is 'standard'
export type StandardInputKeys = {
	W : Phaser.Input.Keyboard.Key,
	A : Phaser.Input.Keyboard.Key,
	S : Phaser.Input.Keyboard.Key,
	D : Phaser.Input.Keyboard.Key,
	UP : Phaser.Input.Keyboard.Key,
	DOWN : Phaser.Input.Keyboard.Key,
	LEFT : Phaser.Input.Keyboard.Key,
	RIGHT : Phaser.Input.Keyboard.Key,
	SPACE : Phaser.Input.Keyboard.Key,
	SHIFT : Phaser.Input.Keyboard.Key,
}

/**
 * StandardKeyboardInput
 * This class exists in a specific scene, and can be extended with useful key functions. 
 * For now, Up/Down/Left/Right pressed accounts for both arrow keys and WASD.
 * @class StandardKeyboardInput
 * @property {StandardInputKeys} keys - keys WASD / ARROW KEYS / SPACE / SHIFT
 */
export class StandardKeyboardInput extends Phaser.GameObjects.GameObject{ 
	public keys : StandardInputKeys;

	constructor(scene : Phaser.Scene) {
		super(scene, 'KeyboardInput');
		scene.add.existing(this);
		this.keys = scene.input.keyboard.addKeys('W,S,A,D,UP,SPACE,LEFT,RIGHT,DOWN,SHIFT') as StandardInputKeys;
	}

	/**
	 * upPressed
	 * 'UP' is pressed, defined with up arrow and 'w'
	 * @returns {boolean} isDown
	 */
	public upPressed() : boolean{
		return (this.keys.UP.isDown || this.keys.W.isDown);
	}
	/**
	 * downPressed
	 * 'DOWN' is pressed, defined with down arrow and 's'
	 * @returns {boolean} isDown
	 */
	public downPressed()  : boolean{
		return (this.keys.DOWN.isDown || this.keys.S.isDown);
	}
	/**
	 * rightPressed
	 * 'RIGHT' is pressed, defined with right arrow and 'd'
	 * @returns {boolean} isDown
	 */
	public rightPressed() : boolean {
		return (this.keys.RIGHT.isDown || this.keys.D.isDown);
	}
	/**
	 * leftPressed
	 * 'LEFT' is pressed, defined with left arrow and 'a'
	 * @returns {boolean} isDown
	 */
	public leftPressed()  : boolean{
		return (this.keys.LEFT.isDown || this.keys.A.isDown);
	}
	/**
	 * Unnecessary but u get the point
	 */
	public spacePressed() : boolean {
		return (this.keys.SPACE.isDown);
	}
}
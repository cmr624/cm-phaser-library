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
export class StandardKeyboardInput extends Phaser.GameObjects.GameObject{ 
	public keys : StandardInputKeys;

	constructor(scene : Phaser.Scene) {
		super(scene, 'KeyboardInput');
		scene.add.existing(this);
		this.keys = scene.input.keyboard.addKeys('W,S,A,D,UP,SPACE,LEFT,RIGHT,DOWN,SHIFT') as StandardInputKeys;
	}

	public upPressed() : boolean{
		return (this.keys.UP.isDown || this.keys.W.isDown);
	}
	public downPressed()  : boolean{
		return (this.keys.DOWN.isDown || this.keys.S.isDown);
	}
	public rightPressed() : boolean {
		return (this.keys.RIGHT.isDown || this.keys.D.isDown);
	}
	public leftPressed()  : boolean{
		return (this.keys.LEFT.isDown || this.keys.A.isDown);
	}
	public spacePressed() : boolean {
		return (this.keys.SPACE.isDown);
	}
}
# CM Phaser Library

## Features

- **Base sprites** (arcade and non-arcade) - allows us to inherit from a base custom sprite that adds to the scene and contains a reference to the scene.

- **Input features** - such as a simplified WASD arrow keys system and the `StandardInput` class which gives us up/down/left/right.

- **Tween features** - "feedback" tweens which prevents tweens on interactive objects from being triggered more than once, "tween chain" object which takes an array of tweens and executes them one after another, and other basic tweens (scale tweens, etc.)

- **Text features** - define commonly used text *styles* ("standard" for now is Helvetica, 48px black)

- **Graphic sprites** - sprites that are drawn using Phaser's 'graphics' library. This basically allows us to draw our shapes instead of loading them at runtime, which could help with building small throwaway objects that we don't want to import a png for. **NOTE** we should test this to make sure it is as performant as running a png, or at least understanding when to use it over when to use a png.

- **Gameplay implementations** - we should add drag and drop, randomly spawning sprites within a container, rotate sprite to cursor, move towards cursor, 

## TODO

- [x] Base Arcade Sprite
- [x] Base Sprite
- [x] Keyboard Input Classes
- [x] Text style types
- [x] Tweens
  - [x] Feedback tweens (disallow them to be pressed while tween is active)
  - [x] Regular tweens (scale, color (?))
  - [x] Tween chaining!!!!
- [x] Graphics Drawing Sprites
- [x] Arcade sprite with move to cursor
- [x] WASD Top Down Movement

- [ ] Sprite move towards angle (any vec2)
- [ ] Base Matter Sprite (?)
- [ ] UI Scene (above base scene)
- [ ] Scrollable scene
- [ ] Popups
- [ ] Text objects
- [ ] ClassMags Toolbar (??????)
- [ ] RexUI implementation
- [ ] Pause menu
- [ ] global sound menu (with options for music / sfx volume)

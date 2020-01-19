# CM Phaser Library

## Features

- **Base sprites** (arcade and non-arcade) - which allows us to inherit from a base custom sprite that allows us to plugin to other "base" features we decide to implement. I can see eventually adding to this class to allow for sprites to have sound controlled by some global plugin.

- **Input features** - such as a simplified WASD arrow keys system and the `StandardInput` class which gives us up/down/left/right.

- **Tween features** - "feedback" tweens which prevents tweens on interactive objects from being triggered more than once, "tween chain" object which takes an array of tweens and executes them one after another, and other basic tweens (scale tweens, etc.)

- **Text features** - define commonly used text *styles* ("standard" for now is Helvetica, 48px black)

- **Graphic sprites** - sprites that are drawn using Phaser's 'graphics' library. This basically allows us to draw our shapes instead of loading them at runtime, which could help with building small throwaway objects that we don't want to import a png for. **NOTE** we should test this to make sure it is as performant as running a png, or at least understanding when to use it over when to use a png.


## TODO 

- [x] Base Arcade Sprite
- [x] Base Sprite
- [x] Keyboard Input Class from phaser-td-typescript / schol treasure hunt
- [x] Text style types
- [x] Tweens
    - [x] Feedback tweens (disallow them to be pressed while tween is active)
    - [x] Regular tweens (scale, color (?))
    - [x] Tween chaining!!!!
- [x] Graphics Drawing Sprites
- [ ] Base Matter Sprite (?)
- [ ] WASD Top Down Movement

- [ ] UI Scene (above base scene)
- [ ] Scrollable scene
- [ ] Popups
- [ ] Text objects

- [ ] ClassMags Toolbar (??????)

- [ ] RexUI implementation
- [ ] Pause menu
- [ ] global sound menu (with options for music / sfx volume)
- [ ] Arcade sprite with move to cursor
- [ ] Sprite move towards angle (any vec2)


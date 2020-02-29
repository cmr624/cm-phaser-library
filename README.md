# CM Phaser Library

## Overview

This library is intended to be a group of commonly used scripts among Phaser 3 games. It is a work in progress!

## Current Features

- **Base sprites** (arcade and non-arcade) - allows us to inherit from a base custom sprite that adds to the scene and contains a reference to the scene.

- **Input features** - such as a simplified WASD arrow keys system and the `StandardInput` class which gives us up/down/left/right.

- **Tween features** - "feedback" tweens which prevents tweens on interactive objects from being triggered more than once, "tween chain" object which takes an array of tweens and executes them one after another, and other basic tweens (scale tweens, etc.)

- **Text features** - define commonly used Phaser text styles

- **Graphic sprites** - sprites that are drawn using Phaser's 'graphics' library. This basically allows us to draw our shapes instead of loading them at runtime, which could help with building small throwaway objects that we don't want to import a png for.

- **Gameplay implementations** - Top Down Player movement, WASD movement, move to cursor.

## TODO

- [x] Base Arcade Sprite
- [x] Base Sprite
- [x] Base Container
- [x] Keyboard Input Classes
- [x] Text style types
- [x] Tweens
  - [x] Feedback tweens (disallow them to be pressed while tween is active)
  - [x] Regular tweens (scale, color (?))
  - [x] Tween chaining
- [x] Graphics Drawing Sprites
- [x] Arcade sprite with move to cursor
- [x] WASD Top Down Movement
- [x] Damageable
- [ ] Sprite move towards angle (any vec2)
- [ ] Base Matter Sprite (?)
- [ ] UI Scene (above base scene)
- [ ] Popups
- [ ] Text objects
- [ ] RexUI implementation
- [ ] Pause menu
- [ ] Global sound menu (with options for music / sfx volume)

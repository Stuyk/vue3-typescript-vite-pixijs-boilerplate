import * as PIXI from 'pixi.js';

import idle from '../spritesheets/idle.json';
import left from '../spritesheets/left.json';
import right from '../spritesheets/right.json';

const spritesheetIdle = new PIXI.Spritesheet(PIXI.BaseTexture.from(idle.meta.image), idle);
const spritesheetLeft = new PIXI.Spritesheet(PIXI.BaseTexture.from(left.meta.image), left);
const spritesheetRight = new PIXI.Spritesheet(PIXI.BaseTexture.from(right.meta.image), right);

await spritesheetIdle.parse();
await spritesheetLeft.parse();
await spritesheetRight.parse();

export class Catcher extends PIXI.AnimatedSprite {
    private _app: PIXI.Application;

    constructor(app: PIXI.Application) {
        super(spritesheetIdle.animations['idle']);
        this.anchor.set(0.5);
        this._app = app;
        this.position.set(400, 550);
        this.animationSpeed = 0.1666;
        this.play();
    }

    moveLeft(): void {
        const bounds = this.getBounds();
        if (bounds.left > 0) {
            this.x -= 10;
        }
        if (this.textures !== spritesheetLeft.animations['left']) {
            this.textures = spritesheetLeft.animations['left'];
            this.play();
        }
    }

    moveRight(): void {
        const bounds = this.getBounds();
        if (bounds.right < this._app.screen.width) {
            this.x += 10;
        }
        if (this.textures !== spritesheetRight.animations['right']) {
            this.textures = spritesheetRight.animations['right'];
            this.play();
        }
    }

    becomeIdle(): void {
        this.textures = spritesheetIdle.animations['idle'];
        this.play();
    }

    hasCaughtObject(object: PIXI.Sprite): boolean {
        return this.getBounds().contains(object.x, object.y);
    }
}

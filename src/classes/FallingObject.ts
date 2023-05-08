import * as PIXI from 'pixi.js';

export class FallingObject extends PIXI.Sprite {
    constructor(texture: PIXI.Texture) {
        super(texture);
        this.anchor.set(0.5);
        this.position.set(Math.random() * 800, -50);
    }

    update(): void {
        this.y += 5;
    }

    isOutOfBounds(): boolean {
        return this.y > 600;
    }
}

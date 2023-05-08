import * as PIXI from 'pixi.js';
import { Catcher, Level, FallingObject } from '.';

const FOOD_TEXTURES = [
    'Apple.png',
    'Avocado.png',
    'Bacon.png',
    'Bread.png',
    'Brownie.png',
    'Cheese.png',
    'Cherry.png',
    'ChickenLeg.png',
    'Chicken.png',
    'Cookie.png',
    'Eggs.png',
    'MelonCantaloupe.png',
    'MelonHoneydew.png',
    'MelonWater.png',
];

export class DisplayManager {
    private _app: PIXI.Application;
    private _infoText: PIXI.Text;
    private _gameState: { score: number; lives: number; level: Level };
    private _retryButton: PIXI.Text;
    private _catcher: Catcher;

    constructor(app: PIXI.Application, gameState: { score: number; lives: number; level: Level }) {
        this._app = app;
        this._gameState = gameState;
        this._catcher = new Catcher(app);
        this._infoText = new PIXI.Text(
            `Level: ${gameState.level.levelNumber} Score: ${gameState.score} Lives: ${gameState.lives}`,
            {
                fontSize: 24,
                fill: 0xffffff,
            }
        );
    }

    initInfoText(): void {
        this._app.stage.addChild(this._infoText);
    }

    initCatcher(): void {
        this._app.stage.addChild(this._catcher);
    }

    spawnObject(): FallingObject {
        const objectTexture = PIXI.Texture.from(
            `food/${FOOD_TEXTURES[Math.floor(Math.random() * FOOD_TEXTURES.length)]}`
        );
        const object = new FallingObject(objectTexture);
        this._app.stage.addChild(object);
        return object;
    }

    removeObject(object: FallingObject, objects: FallingObject[]): void {
        const index = objects.indexOf(object);
        if (index !== -1) {
            objects.splice(index, 1);
        }
        this._app.stage.removeChild(object);
    }

    updateGameInfo(): void {
        this._infoText.text = `Level: ${this._gameState.level.levelNumber} Score: ${this._gameState.score} Lives: ${this._gameState.lives}`;
    }

    addRetryButton(): PIXI.Text {
        this._retryButton = new PIXI.Text('Retry', {
            fontSize: 36,
            fill: 0xffffff,
        });
        this._retryButton.anchor.set(0.5);
        this._retryButton.x = this._app.view.width / 2;
        this._retryButton.y = this._app.view.height / 2;
        this._retryButton.interactive = true;
        this._retryButton.buttonMode = true;
        this._app.stage.addChild(this._retryButton);
        return this._retryButton;
    }

    removeRetryButton(): void {
        this._app.stage.removeChild(this._retryButton);
    }

    reset(): void {
        this._gameState.score = 0;
        this._gameState.lives = 10;
        this._gameState.level.reset();
        this.updateGameInfo();
    }

    get catcher(): Catcher {
        return this._catcher;
    }
}

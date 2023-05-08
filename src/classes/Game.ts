import * as PIXI from 'pixi.js';
import { Level, FallingObject, DisplayManager } from '.';

export class Game {
    private _app: PIXI.Application;
    private _objects: FallingObject[] = [];
    private _gameState = {
        score: 0,
        lives: 10,
        level: new Level(1, 5, 1000),
    };
    private _isStarted: boolean = false;
    private _displayManager: DisplayManager;

    constructor(app: PIXI.Application) {
        this._app = app;
        this._displayManager = new DisplayManager(app, this._gameState);
    }

    start(): void {
        if (this._isStarted) return;
        this._isStarted = true;
        this.initControls();
        this.spawnObjects();
        this._displayManager.initCatcher();
        this._displayManager.initInfoText();
        this._app.ticker.add(() => this.update());
    }

    private initControls(): void {
        const catcher = this._displayManager.catcher;
        window.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') catcher.moveLeft();
            if (e.key === 'ArrowRight') catcher.moveRight();
        });
        window.addEventListener('keyup', (e) => {
            if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') catcher.becomeIdle();
        });
    }

    private spawnObjects(): void {
        this._objects.push(this._displayManager.spawnObject());

        setTimeout(() => {
            if (this._objects.length < this._gameState.level.maxObjects) {
                this.spawnObjects();
            }
        }, 1000);
    }

    private update(): void {
        const catcher = this._displayManager.catcher;
        if (this._gameState.score / 10 > this._gameState.level.levelNumber) this._gameState.level.nextLevel();
        this._objects.forEach((object) => {
            object.update();

            if (catcher.hasCaughtObject(object)) {
                this._gameState.score++;
                this._displayManager.removeObject(object, this._objects);
            } else if (object.isOutOfBounds()) {
                this._gameState.lives--;
                this._displayManager.removeObject(object, this._objects);
                if (this._gameState.lives <= 0) {
                    this.gameOver();
                }
            }
        });
        this._displayManager.updateGameInfo();
    }

    private gameOver(): void {
        this._app.ticker.stop();
        alert(`Game Over! Your score is ${this._gameState.score}`);
        const retryButton = this._displayManager.addRetryButton();
        retryButton.on('pointerdown', () => {
            this._displayManager.reset();
            this._objects.forEach((object) => this._displayManager.removeObject(object, this._objects));
            this._displayManager.removeRetryButton();
            this._app.ticker.start();
            this._gameState.lives = 10;
            this._gameState.score = 0;
            this._gameState.level.reset();
            this.start();
        });
    }
}

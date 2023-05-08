import { test, beforeEach, it, expect } from 'vitest';
import { DisplayManager, Level, FallingObject } from '../src/classes';
import * as PIXI from 'pixi.js';

/**
 * @vitest-environment jsdom
 */

test('DisplayManager', () => {
    let displayManager;
    let app;
    let gameState;

    beforeEach(() => {
        app = new PIXI.Application();
        gameState = {
            score: 0,
            lives: 10,
            level: new Level(1, 5, 1000),
        };
        displayManager = new DisplayManager(app, gameState);
    });

    it('should initialize with default values', () => {
        expect(displayManager['infoText'].text).toBe(
            `Level: ${gameState.level.levelNumber} Score: ${gameState.score} Lives: ${gameState.lives}`
        );
    });

    it('should spawn an object', () => {
        const object = displayManager.spawnObject();
        expect(object).toBeDefined();
    });

    it('should remove an object', () => {
        const objects = [new FallingObject()];
        displayManager.removeObject(objects[0], objects);
        expect(objects.length).toBe(0);
    });

    it('should update game info', () => {
        gameState.score = 10;
        gameState.lives = 5;
        displayManager.updateGameInfo();
        expect(displayManager['infoText'].text).toBe(
            `Level: ${gameState.level.levelNumber} Score: ${gameState.score} Lives: ${gameState.lives}`
        );
    });

    it('should add a retry button', () => {
        const retryButton = displayManager.addRetryButton();
        expect(retryButton.text).toBe('Retry');
    });

    it('should remove the retry button', () => {
        displayManager.addRetryButton();
        displayManager.removeRetryButton();
        // add assertions to check if the retry button has been removed
    });

    it('should reset the game state', () => {
        gameState.score = 10;
        gameState.lives = 5;
        displayManager.reset();
        expect(gameState.score).toBe(0);
        expect(gameState.lives).toBe(10);
    });

    it('should initialize info text', () => {
        displayManager.initInfoText();
        // add assertions to check if the info text has been initialized
    });

    it('should initialize catcher', () => {
        displayManager.initCatcher();
        // add assertions to check if the catcher has been initialized
    });
});

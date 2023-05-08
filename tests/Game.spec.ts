import { test, beforeEach, expect, it } from 'vitest';
import { Game } from '../src/classes';
import * as PIXI from 'pixi.js';

/**
 * @vitest-environment jsdom
 */

test('Game', () => {
    let game;
    let app;

    beforeEach(() => {
        app = new PIXI.Application();
        game = new Game(app);
    });

    it('should initialize with default values', () => {
        expect(game['gameState'].score).toBe(0);
        expect(game['gameState'].lives).toBe(10);
        expect(game['isStarted']).toBe(false);
    });

    it('should start the game', () => {
        game.start();
        expect(game['isStarted']).toBe(true);
    });

    it('should not start the game if already started', () => {
        game.start();
        game['isStarted'] = false;
        game.start();
        expect(game['isStarted']).toBe(false);
    });

    it('should spawn objects', () => {
        game.start();
        expect(game['objects'].length).toBeGreaterThan(0);
    });

    it('should update the game state', () => {
        game.start();
        const initialScore = game['gameState'].score;
        const initialLives = game['gameState'].lives;
        game['update']();
        expect(game['gameState'].score).not.toBe(initialScore);
        expect(game['gameState'].lives).not.toBe(initialLives);
    });
});

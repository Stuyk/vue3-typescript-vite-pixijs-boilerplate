import { test, beforeEach, it, expect } from 'vitest';
import { Catcher } from '../src/classes';
import * as PIXI from 'pixi.js';

/**
 * @vitest-environment jsdom
 */

test('Catcher', () => {
    let catcher;
    let app;

    beforeEach(() => {
        app = new PIXI.Application();
        catcher = new Catcher(app);
    });

    it('should initialize with default values', () => {
        expect(catcher.x).toBe(400);
        expect(catcher.y).toBe(550);
    });

    it('should move left', () => {
        const initialX = catcher.x;
        catcher.moveLeft();
        expect(catcher.x).toBeLessThan(initialX);
    });

    it('should not move left beyond the screen', () => {
        catcher.x = 0;
        catcher.moveLeft();
        expect(catcher.x).toBe(0);
    });

    it('should move right', () => {
        const initialX = catcher.x;
        catcher.moveRight();
        expect(catcher.x).toBeGreaterThan(initialX);
    });

    it('should not move right beyond the screen', () => {
        catcher.x = app.screen.width;
        catcher.moveRight();
        expect(catcher.x).toBe(app.screen.width);
    });

    it('should check if object is caught', () => {
        const object = new PIXI.Sprite();
        object.x = catcher.x;
        object.y = catcher.y;
        expect(catcher.hasCaughtObject(object)).toBe(true);
    });

    it('should check if object is not caught', () => {
        const object = new PIXI.Sprite();
        object.x = catcher.x + 100;
        object.y = catcher.y + 100;
        expect(catcher.hasCaughtObject(object)).toBe(false);
    });
});

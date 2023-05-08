import { FallingObject } from '../src/classes/FallingObject';
import * as PIXI from 'pixi.js';
import { describe, beforeEach, test, expect } from 'vitest';

/**
 * @vitest-environment jsdom
 */

describe('FallingObject', () => {
    let object: FallingObject;

    beforeEach(() => {
        const texture = PIXI.Texture.from('food/Apple.png');
        object = new FallingObject(texture);
    });

    test('update() should increase y position', () => {
        const initialY = object.y;
        object.update();
        expect(object.y).toBeGreaterThan(initialY);
    });

    test('isOutOfBounds() should return true if object is outside screen bounds', () => {
        object.y = 601;
        expect(object.isOutOfBounds()).toBe(true);
    });

    test('isOutOfBounds() should return false if object is within screen bounds', () => {
        object.y = 599;
        expect(object.isOutOfBounds()).toBe(false);
    });
});

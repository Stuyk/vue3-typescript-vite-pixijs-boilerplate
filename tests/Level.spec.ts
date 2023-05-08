import { Level } from '../src/classes/Level';
import { describe, beforeEach, test, expect } from 'vitest';

/**
 * @vitest-environment jsdom
 */

describe('Level', () => {
    let level: Level;

    beforeEach(() => {
        level = new Level(1, 5, 1000);
    });

    test('getLevelNumber() should return the correct level number', () => {
        expect(level.levelNumber).toBe(1);
    });

    test('getSpawnInterval() should return the correct spawn interval', () => {
        expect(level.spawnInterval).toBe(1000);
    });

    test('getMaxObjects() should return the correct max objects count', () => {
        expect(level.maxObjects).toBe(5);
    });

    test('nextLevel() should increment the level number and adjust spawn interval and max objects', () => {
        level.nextLevel();

        expect(level.levelNumber).toBe(2);
        expect(level.spawnInterval).toBeLessThan(1000);
        expect(level.maxObjects).toBeGreaterThan(5);
    });

    test('reset() should reset the level number, spawn interval, and max objects to their initial values', () => {
        level.nextLevel();
        level.reset();

        expect(level.levelNumber).toBe(1);
        expect(level.spawnInterval).toBe(1000);
        expect(level.maxObjects).toBe(5);
    });
});

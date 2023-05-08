export class Level {
    private _levelNumber: number;
    private _maxObjects: number;
    private _spawnInterval: number;

    constructor(levelNumber: number, maxObjects: number, spawnInterval: number) {
        this._levelNumber = levelNumber;
        this._maxObjects = maxObjects;
        this._spawnInterval = spawnInterval;
    }

    get levelNumber(): number {
        return this._levelNumber;
    }

    get maxObjects(): number {
        return this._maxObjects;
    }

    get spawnInterval(): number {
        return this._spawnInterval;
    }

    nextLevel(): void {
        this._levelNumber++;
        this._maxObjects += Math.ceil(this._levelNumber * 0.5);
        this._spawnInterval *= 0.9;
    }

    reset(): void {
        this._levelNumber = 1;
        this._maxObjects = 5;
        this._spawnInterval = 1000;
    }
}

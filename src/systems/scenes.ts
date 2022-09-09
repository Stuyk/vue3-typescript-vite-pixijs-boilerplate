import * as PIXI from 'pixi.js';
import { PixiEngine } from './engine';
import { createPlayer } from './player';

let engine: PIXI.Application;

export function loadScenes() {
    if (!engine) {
        engine = PixiEngine.get();
    }

    mainScene();
}

function mainScene() {
    createPlayer(engine);
}

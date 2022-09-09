import * as PIXI from 'pixi.js';
import { createPlayer } from '../systems/player';
import { PixiEngine } from '../systems/engine';
import { Scenes } from '../systems/scenes';

const SCENE_NAME = 'Main';
let engine: PIXI.Application;

function SceneMain() {
    console.log(`LOADED MAIN SCENE`);
    if (!engine) {
        engine = PixiEngine.get();
    }

    createPlayer(engine);
}

function SceneMainUnload() {
    if (!engine) {
        engine = PixiEngine.get();
    }
}

function init() {
    Scenes.addScene(SCENE_NAME, SceneMain, SceneMainUnload);
    Scenes.loadScene(SCENE_NAME);
}

export const MainScene = {
    init,
};

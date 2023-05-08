import * as PIXI from 'pixi.js';
import { PixiEngine, Scenes } from './systems';

const SCENE_NAME = 'Main';
let engine: PIXI.Application;

function SceneMain() {
    console.log(`LOADED MAIN SCENE`);
    if (!engine) {
        engine = PixiEngine.get();
    }
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

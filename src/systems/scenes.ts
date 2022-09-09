import * as PIXI from 'pixi.js';
import { PixiEngine } from './engine';

const SCENES: { [key: string]: { load: Function; unload: Function } } = {};

let engine: PIXI.Application;
let currentScene = 'Main';
let isFirstLoad = false;

function loadScene(sceneToLoad: string) {
    if (!engine) {
        engine = PixiEngine.get();
    }

    if (!SCENES[sceneToLoad]) {
        throw new Error(`No Scene Named: ${name}`);
    }

    if (!isFirstLoad) {
        if (SCENES[currentScene]) {
            SCENES[currentScene].unload();
        }
    } else {
        isFirstLoad = false;
    }

    SCENES[currentScene].load();
}

function addScene(name: string, onLoad: Function, onUnload: Function) {
    SCENES[name] = {
        load: onLoad,
        unload: onUnload,
    };
}

export const Scenes = {
    addScene,
    loadScene,
};

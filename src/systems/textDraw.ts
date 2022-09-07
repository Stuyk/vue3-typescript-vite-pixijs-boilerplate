import * as PIXI from 'pixi.js';
import { PixiEngine } from './engine';

let engine: PIXI.Application;

export function loadScenes() {
    if (!engine) {
        engine = PixiEngine.get();
    }

    drawRotatingText();
}

function drawRotatingText() {
    const centerScreenText = new PIXI.Text('Hello from Vue', { fontFamily: 'Arial', fontSize: 24, fill: 0xFFFFFF, align: 'center' })
    centerScreenText.position = {
      x: 800 / 2,
      y: 600 / 2
    }
  
    PixiEngine.get().stage.addChild(centerScreenText);
    PixiEngine.get().ticker.add(() => {
      centerScreenText.rotation += 0.005;
    })
}
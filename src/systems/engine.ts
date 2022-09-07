import * as PIXI from 'pixi.js';

let PixiApp: PIXI.Application;

export const PixiEngine = {
    init(width: number, height: number) {
        if (typeof PixiApp !== 'undefined') {
            PixiApp.destroy();
        }

        PixiApp = new PIXI.Application({ width, height, backgroundColor: 0x2980b9 });
    },
    get() {
        if (typeof PixiApp === 'undefined') {
            throw new Error('Run PixiEngine.init first');
        }

        return PixiApp;
    },
    getCanvas() {
        return PixiApp.view
    }
}
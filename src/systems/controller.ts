const keyDowns: { [key: string]: Function } = {};
const keyUps: { [key: string]: Function } = {};

let isInitialized = false;

function handleKeyDown(ev: KeyboardEvent) {
    if (!keyDowns[`${ev.keyCode}`]) {
        return;
    }

    keyDowns[`${ev.keyCode}`]();
}

function handleKeyUp(ev: KeyboardEvent) {
    if (!keyUps[`${ev.keyCode}`]) {
        return;
    }

    keyUps[`${ev.keyCode}`]();
}

function init() {
    if (isInitialized) {
        return;
    }

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
}

function addKeyDownEvent(key: number, callback: Function) {
    keyDowns[key] = callback;
}

function addKeyUpEvent(key: number, callback: Function) {
    keyUps[key] = callback;
}

export const Controller = {
    init,
    addKeyUpEvent,
    addKeyDownEvent,
};

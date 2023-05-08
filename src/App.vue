<template>
    <div>
        <div ref="canvasRef"></div>
        <div class="start-text" v-if="!gameStarted" @click="startGame">Click here to start the game</div>
    </div>
</template>

<style scoped>
.start-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 32px;
    font-weight: bold;
    cursor: pointer;
}
</style>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, Ref, ref } from 'vue';
import { PixiEngine } from './systems';
import { Game } from './classes';

const canvasRef: Ref<HTMLElement | null> = ref(null);
let game: Game | undefined;
const gameStarted = ref(false);

const startGame = () => {
    if (!gameStarted.value) {
        gameStarted.value = true;
        if (!game) {
            game = new Game(PixiEngine.get());
            game.start();
        } else {
            game.resume();
        }
    }
};

onMounted(async () => {
    await PixiEngine.init(800, 600);
    const canvasInfo = PixiEngine.getCanvas();
    canvasRef.value?.appendChild(canvasInfo);
});

onBeforeUnmount(() => {
    if (game) {
        game.stop();
    }
});
</script>

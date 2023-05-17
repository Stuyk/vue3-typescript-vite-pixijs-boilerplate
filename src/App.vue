<script setup lang="ts">
import { ref } from 'vue';
import { Stage, tryMountTicker } from 'vue3-pixi'
import { useMagicKeys, onKeyDown } from '@vueuse/core'
import AlphaTransition from './components/AlphaTransition.vue'

const showSprite = ref(true)

const {
  arrowright,
  arrowleft,
  arrowup,
  arrowdown,
  shift,
} = useMagicKeys()

onKeyDown(' ', () => {
  console.log('space')
})

tryMountTicker(() => {
  if (arrowright.value) {
    console.log('right')
  }
  if (arrowleft.value) {
    console.log('left')
  }
  if (arrowup.value) {
    console.log('up')
  }
  if (arrowdown.value) {
    console.log('down')
  }
  if (shift.value) {
    console.log('shift')
  }
})
</script>

<template>
  <div>
    <Stage :width="800" :height="600" :background-color="0x2980b9">
      <Text :x="280" :y="200" :style="{ align: 'left' }" @click="showSprite = !showSprite">
        Click Toggle Sprite
      </Text>
      <AlphaTransition>
        <sprite v-if="showSprite" :x="400" :y="300" :anchor="0.5" texture="/player.png" />
      </AlphaTransition>
    </Stage>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

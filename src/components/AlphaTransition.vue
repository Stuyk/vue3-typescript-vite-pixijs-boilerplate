<script lang="ts" setup>
import { PixiTransition } from 'vue3-pixi'
</script>

<template>
  <pixi-transition
    :duration="300"
    :before-enter="{ alpha: 0 }"
    :enter="{ alpha: 1 }"
    :leave="{ alpha: 0 }"
  >
    <slot />
  </pixi-transition>
</template>

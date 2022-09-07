import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const isProduction = process.argv.includes('production');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: isProduction ? '/vue3-typescript-vite-pixijs/' : '/'
})

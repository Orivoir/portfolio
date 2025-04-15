import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {visualizer} from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true, // ouvre automatiquement dans ton navigateur
      gzipSize: true, // affiche la taille gzip
      brotliSize: true, // affiche la taille Brotli
    }),
  ],
  base: "/portfolio/"
})

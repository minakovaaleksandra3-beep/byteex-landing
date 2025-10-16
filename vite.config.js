import { defineConfig } from 'vite'

export default defineConfig({
  base: "/byteex-landing/",
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  },
  publicDir: 'public'
})
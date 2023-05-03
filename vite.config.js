import { defineConfig } from 'vite'
export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: '/src/temp/js/main.js',
      output: {
        entryFileNames: 'js/main.js',
      }
    }
  }
})
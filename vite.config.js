import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: '/src/js/main.js',
      output: {
        entryFileNames: 'js/main.js',
        assetFileNames: ({name}) => {
          // css
          if (/\.css$/.test(name ?? '')) {
            return 'css/style.css';
          }
          // image
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')){
            return 'images/[name].[ext]';
          }
          // default value
          return '[name].[ext]';
        },
      }
    }
  }
})
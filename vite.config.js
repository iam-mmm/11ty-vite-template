import { defineConfig } from 'vite';
import autoprefixer from "autoprefixer";

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
          // if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')){
          //   return 'assets/images/[name].[ext]';
          // }
          // default value
          return 'assets/[name].[ext]';
        },
      }
    }
  },
  return: {
    css: {
      postcss: {
        plugins: [autoprefixer],
      },
    },
  }
})
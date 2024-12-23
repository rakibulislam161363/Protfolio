import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        main: resolve(__dirname, 'script.js'),
        main: resolve(__dirname, 'style.css'),
        // main: resolve(__dirname, 'testing.css'),
      },
    },
  },
});

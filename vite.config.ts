import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const API_DOMAIN = '';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    // outDir: './docs'
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 8888,
    open: true,
    proxy: {
      '/api': {
        target: API_DOMAIN,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
});

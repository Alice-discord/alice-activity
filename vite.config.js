import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    supported: {
      'top-level-await': true //browsers can handle top-level-await features
    },
  },
  plugins: [vue()],
  base: `/`,
  server: {
    hmr: {
      host: '192.168.1.254',
    }
  },
     proxy: {
      '/api': {
        target: 'http://server.alicediscord.com:3001',
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
    hmr: {
      clientPort: 443,
    },
  },
);
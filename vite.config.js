import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": "./src",
    },
  },
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "./index.html"),
        demo: resolve(__dirname, "./live-demo.html"),
        login: resolve(__dirname, "./login.html"),
        user: resolve(__dirname, "./user.html"),
      },
    },
  },
  plugins: [createVuePlugin()],
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
  },
});

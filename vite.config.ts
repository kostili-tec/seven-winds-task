import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint';;
import { resolve } from 'path';
import autoprefixer from 'autoprefixer';

export const pathResolver = (p: string) => resolve(__dirname, '.', p);

export default defineConfig({
  plugins: [react(), eslint()],
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  resolve: {
    alias: {
      '@': pathResolver('./src'),
    },
  },
});

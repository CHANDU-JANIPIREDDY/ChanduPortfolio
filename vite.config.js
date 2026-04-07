import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // ensures assets load correctly
  build: {
    rollupOptions: {
      external: [], // leave empty for now
    },
  },
});

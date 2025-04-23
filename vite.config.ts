import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/forestvibe/',  // 👈 Add this line exactly as shown
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

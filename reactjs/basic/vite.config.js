import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Change port gate
  server: {
    port: 9009
  },
  preview: {
    port: 8080
  }
})

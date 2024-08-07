import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Security-Technology-Alarm/",
  build: {
    outDir: 'dist'  // Ensure this matches the directory you're using in the deploy script
  }
})

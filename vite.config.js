import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // For GitHub Pages: repo is served at https://<user>.github.io/Drinks-and-Development/
  base: process.env.VITE_BASE_PATH || '/',
})

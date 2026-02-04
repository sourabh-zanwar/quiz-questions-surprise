import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set the correct base path for GitHub Pages project deployment
  // If you change the repo name, update this to `/<repo>/`
  base: '/quiz-questions-surprise/',
})


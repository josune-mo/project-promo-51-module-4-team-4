import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/project-promo-51-module-3-team-4/",
  server: {
    open: "/index.html",
    watch: {
      usePolling: true
    }
  },
})

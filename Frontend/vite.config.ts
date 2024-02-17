import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "../docs"
  },
  server: {
    proxy: {
      "/api": {
        target: "https://api.blog.khanalsaurav.com.np",
        secure: false,
      }
    }
  }
})

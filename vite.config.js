import { defineConfig } from 'vite'

export default defineConfig({
  // Set base to '/' since the user is using a custom domain (mr.dawar.sa)
  base: '/',
  build: {
    outDir: 'dist',
  }
})

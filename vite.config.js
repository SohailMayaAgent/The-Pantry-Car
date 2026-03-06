import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // reduce chunk parse time (TBT)
    target: 'es2020',
    minify: 'esbuild',
    rollupOptions: {
      output: {
        // split vendor (React) into its own cached chunk
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
    // inline small assets to save round trips
    assetsInlineLimit: 4096,
    // compress build for analysis
    reportCompressedSize: false,
  },
  // faster HMR in dev
  server: {
    hmr: true,
  },
})

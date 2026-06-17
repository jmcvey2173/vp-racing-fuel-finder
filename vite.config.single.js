import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// Single-file build: inlines the JS, CSS, and logo into ONE index.html so the
// demo can be opened by double-clicking the file — no web server needed.
// Output goes to dist-single/. Run with: npm run build:single
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  base: './',
  build: {
    outDir: 'dist-single',
    assetsInlineLimit: 100000000, // inline all assets (incl. the logo png)
    cssCodeSplit: false,
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
//
// Base path is "/my-portfolio/" because the site is deployed as a GitHub
// Pages project site at https://official-mary.github.io/my-portfolio/.
// Override at build time with:  vite build --base=/some/other/path/
export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/my-portfolio/',
  plugins: [react()],
})

import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
   tailwindcss(),
  ],
  // backend MokutonCoffee-API CORS hanya mengizinkan http://localhost:3000
  server: { port: 3000 },
})

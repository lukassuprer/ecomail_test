import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const env = loadEnv('DEV', process.cwd(), '');

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'process.env.API_URL': JSON.stringify(env.API_URL)
  },
  plugins: [react()],
})

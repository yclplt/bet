import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
    plugins: [react()],

    server: {
        port: 3535,
        host: true,
        open: false,
    },
    esbuild: {
        logOverride: { 'this-is-undefined-in-esm': 'silent' },
    },
    resolve: {
        alias: [{ find: '@', replacement: '/src' }],
    },
    build: {
        chunkSizeWarningLimit: 2000,
    },
})

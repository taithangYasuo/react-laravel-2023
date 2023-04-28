import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [
        react(),
        laravel({
            // input: ['resources/css/app.css', 'resources/js/app.js'],
            input: ["frontend/index.jsx"],
            refresh: true,
        }),
    ],
});

import { defineConfig } from 'vite'

export default defineConfig({
    server: {
        host: true, // يجعل السيرفر يستمع على جميع عناوين الشبكة
        port: 5173,
    }
})

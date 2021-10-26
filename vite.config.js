import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'




export default defineConfig({
    resolve: {
        alias: {
            '/@': path.resolve(__dirname, './src'),
        },
    },
    plugins: [vue()],
    server: {
        fs: {
            allow: ['..']
        }
    },
    // css: {
    //     preprocessorOptions: {
    //         scss: {
    //             additionalData: `@import "~@/assets/scss/style";`
    //         },
    //     },
    // },
})
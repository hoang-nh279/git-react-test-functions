/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base:'/git-redux-demo/',
  test: {
    globals: true,                 // Cho phép dùng describe, it, expect
    environment: 'jsdom',          // Quan trọng: có DOM cho React
    include: ['src/**/*.{test,spec}.{js,jsx}'], // Đảm bảo Vitest tìm thấy file test
    setupFiles: './src/setupTests.js', // (Tùy chọn)
  },
})

import { defineConfig } from 'vite'
import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  envDir: resolve(),
  root: resolve('src'),
  server: {
    port: 8080
  },
  resolve: {
    alias: {
      '@': resolve('src')
    }
  },
  plugins: [
    vue()
  ],
  build: {
    outDir: resolve('dist')
  },
  test: {
    root: resolve(),
    coverage: {
      enabled: true,
      reportsDirectory: resolve('coverage')
    },
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
})

import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {}, // ✅ correct plugin name
      autoprefixer: {},
    },
  },

  modules: [
    '@pinia/nuxt'
  ]
})

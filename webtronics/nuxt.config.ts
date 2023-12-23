// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@element-plus/nuxt',
    'nuxt-icon',
    '@pinia/nuxt'
  ],
  css: [
    '@/assets/styles/main.css'
  ],
  ssr: false
})

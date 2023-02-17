// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    // '@nuxt/image', // for the next time add this to the project
    // '@nuxt/image-edge',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          'defineStore', // import { defineStore } from 'pinia'
          [
            'defineStore', 
            'definePiniaStore'
          ], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
  ],
  // image : {}
})

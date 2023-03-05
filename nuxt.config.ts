// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        // pageTransition: { name: 'page', mode: 'in-out' },
        // layoutTransition: { name: 'layout', mode: 'in-out' }
        pageTransition : false,
        layoutTransition : false
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',

    ],
    pinia: {
        autoImports: [
            // automatically imports `defineStore`
            'defineStore', // import { defineStore } from 'pinia'
            ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
        ],
    },
})

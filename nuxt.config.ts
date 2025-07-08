// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: {enabled: true},
    css: [
        '~/assets/main.css'
    ],
    modules: ['@nuxt/fonts', 'nuxt-icons', '@nuxt/icon'],
    icon: {
        customCollections: [
            {
                prefix: 'kc',
                dir: './assets/icons'
            }
        ]
    }
})
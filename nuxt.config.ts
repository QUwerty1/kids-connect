// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: {enabled: true},
    css: [
        '~/assets/main.css'
    ],
    modules: ['@nuxt/fonts', '@nuxt/icon'],
    icon: {
        customCollections: [
            {
                prefix: 'kc',
                dir: './assets/icons'
            }
        ],
        // mode: 'css',
        serverBundle: false,
        clientBundle: {
            scan: true,
            sizeLimitKb: 1024
        }
    },
    app: {
        baseURL: '/kids-connect/'
    }
})
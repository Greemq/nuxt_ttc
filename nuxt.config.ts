export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: false},
    css: [
        '~/assets/css/tailwind.css'
    ],
    build: {
        transpile: [],
        extractCSS: true,
        optimizeCSS: true,
    },
    vite: {},

})


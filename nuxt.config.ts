import {defineNuxtConfig} from 'nuxt/config';

export default defineNuxtConfig({
    css: ["@/assets/css/styles.scss"],

    build: {
        postcss: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
            },
        },
        sourcemap: false,
        analyze: false
    },

    devtools: false,
    modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss', '@nuxt/image'],

    i18n: {
        locales: [{code: 'ru', name: 'Рус', file: 'ru.json'}],
        defaultLocale: 'ru',
        lazy: true,
        langDir: 'locales/',
        strategy: 'prefix',
        vueI18n: './i18n.config.js',
    },

    runtimeConfig: {
        public: {
            imageDomains: process.env.NUXT_PUBLIC_IMAGE_DOMAINS ?? 'yourdomain.com',
            debug: process.env.NODE_ENV !== 'production'
        }
    },

    image: {
        domains: [
            ...(process.env.NUXT_PUBLIC_IMAGE_DOMAINS?.split(',') ?? ['yourdomain.com']),
            ...(process.env.NODE_ENV === 'development' ? ['localhost'] : [])
        ],
        provider: 'static'
    },

    sourcemap: {
        server: true,
        client: true
    },
    nitro: {
        logLevel: 3,
        sourceMap: true,
    },

});
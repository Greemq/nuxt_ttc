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
        // transpile: ["flowbite"]
    },
    // pages: false,
    devtools: {enabled: false},

    modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss'],

    i18n: {
        locales: [
            {code: 'ru', name: 'Рус', file: 'ru.json'},
            // {code: 'en', name: 'Eng', file: 'en.json'},
            // {code: 'kk', name: 'Каз', file: 'kk.json'},
        ],
        defaultLocale: 'ru',
        lazy: true,
        langDir: 'locales/',
        strategy: 'prefix',
        defaultLocaleRouteNameSuffix: '',
        vueI18n: './i18n.config.js',
        detectBrowserLanguage: {
            useCookie: true,
            cookieKey: 'i18n_redirected',
            alwaysRedirect: true,
            fallbackLocale: 'ru',
        },
    },


    compatibilityDate: '2025-02-21',
    vite: {
        build: {
            cssCodeSplit: false
        }
    }
});
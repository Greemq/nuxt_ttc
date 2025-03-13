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
    devtools: false,

    modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss', '@nuxt/image'],

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


    vite: {
        build: {
            cssCodeSplit: true,
            minify: 'terser'
        }
    },
    runtimeConfig: {
        public: {
            imageDomains: process.env.IMAGE_DOMAINS || 'yourdomain.com'
        }
    },
    image: {
        domains: [
            ...(process.env.IMAGE_DOMAINS?.split(',') || ['yourdomain.com']),
            ...(process.env.NODE_ENV === 'development' ? ['localhost'] : []),
        ],
        provider: 'ipx',
    },
});
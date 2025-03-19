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
        sourcemap: false,
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return 'vendor';
                    }
                }
            }
        }
    },
    nitro: {
        minify: true,
        compressPublicAssets: true,
        experimental: {
            wasm: false,
            asyncContext: false
        },
        storage: {
            cache: {
                driver: 'fs',
                options: {
                    base: '.nitro/cache'
                }
            }
        },
        prerender: {
            crawlLinks: false,
        }
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
            minify: 'terser',
            sourcemap: false,
        },
        server: {
            fs: {
                strict: false,
            }
        }
    }

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

    compatibilityDate: '2025-03-14',
});
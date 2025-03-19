import {defineNuxtConfig} from 'nuxt/config';
import {resolve} from 'path';

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
        // rollupOptions: {
        //     output: {
        //         manualChunks(id) {
        //             if (id.includes('node_modules')) return 'vendor';
        //         }
        //     }
        // }
    },
    //
    // nitro: {
    //     minify: true,
    //     compressPublicAssets: true,
    //     experimental: {
    //         wasm: false,
    //         asyncContext: false
    //     },
    //     storage: {
    //         storage: {
    //             cache: {
    //                 driver: 'fs',
    //                 base: resolve(process.cwd(), '.nitro/cache')
    //             }
    //         }
    //     }
    // },

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

    // vite: {
    //     build: {
    //         cssCodeSplit: true,
    //         minify: 'esbuild',
    //         sourcemap: false,
    //     },
    //     server: {
    //         fs: {strict: false}
    //     }
    // },

    runtimeConfig: {
        public: {
            imageDomains: process.env.NUXT_PUBLIC_IMAGE_DOMAINS || 'yourdomain.com'
        }
    },
    image: {
        domains: [
            ...(process.env.NUXT_PUBLIC_IMAGE_DOMAINS?.split(',') || ['yourdomain.com']),
            ...(process.env.NODE_ENV === 'development' ? ['localhost'] : [])
        ],
        provider: 'static'
    }
});

module.exports = {
    darkMode: 'class',
    content: [
        // "./components/**/*.{js,vue,ts}",
        // "./layouts/**/*.vue",
        // "./pages/**/*.vue",
        // "./plugins/**/*.{js,ts}",
        // "./nuxt.config.{js,ts}",
        "./pages/**/*.vue",
        "./components/**/*.vue",
        "./layouts/**/*.vue"
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#50B748',
                'dark': '#191c1b',
                'gray-dark': '#6b6e6d',
                'gray-light': '#e3e3e3',
                'white': '#FFFFFF',
                'gray': '#ACACAC',
                'bg': '#f5f5f5',
                'primary-light': '#f2f9f0',
                'success': '#1ECD92',
                'error': '#FF428A',
                'info': '#1B80FC',
                'dark-white':'#383838',
                'dark-bg':'#2C2C2C',
                'dark-gray-light':"#444444",
                'dark-dark':'#F6F6F6',
                'dark-black':'#1A1B1B'
            },
            fontFamily: {
                golos: ['Golos UI', 'sans-serif'],
            },
        }

    },
    plugins: [
        // require('flowbite/plugin')
    ]
};
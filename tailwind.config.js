module.exports = {
    mode: 'jit',
    content: [
        "./pages/**/*.{vue,js,ts,jsx,tsx}",
        "./components/**/*.{vue,js,ts,jsx,tsx}",
        "./node_modules/flowbite/**/*.js"
    ],
    purge: ['./pages/**/*.{vue,js}', './components/**/*.{vue,js}'],
    theme: {
        extend: {
            colors: {
                'mygreen': '#50B748'
            }
        },

    },
    plugins: [
        require('flowbite/plugin')
    ]
};
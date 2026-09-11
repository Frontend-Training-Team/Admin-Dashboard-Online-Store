/** @type {import('tailwindcss').Config} */

export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                Serif: ['"Playfair Display"', 'serif'],
                Inter: ['"Inter"', 'sans-serif']
            },
            colors: {
                brand: {
                    50: '#FDFBF7',
                    100: '#F7F4EF',
                    200: '#E5DEC9',
                    300: '#D88D68',
                    500: '#B67352',
                    700: '#7A6E67',
                    800: '#332A24',
                    900: '#2B231F',
                    950: '#141110',
                },
                surface: {
                    light: '#FAFAF8',
                    dark: '#141110',
                    cardLight: '#FFFFFF',
                    cardDark: '#1F1A17',
                },
            },
        },
    },
    plugins: [],
}
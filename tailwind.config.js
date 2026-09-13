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
                    800: '#2A2E38',
                    900: '#1F2229',
                    950: '#16181D',
                },
                copper: {
                    200: '#F0CDAF',
                    300: '#E8B58F',
                    400: '#D99B70',
                    500: '#C98156',
                    600: '#A8653F',
                    700: '#7E4A2D',
                    900: '#2A1B12',
                },
                ink: {
                    950: '#08090B',
                    900: '#0B0C0F',
                    800: '#12141A',
                    700: '#181B22',
                    600: '#1F232B',
                    500: '#22262F',
                    400: '#282D37',
                    300: '#343A45',
                },
                content: {
                    primary: '#F5F1EA',
                    secondary: '#B9B2A8',
                    muted: '#8A8378',
                    disabled: '#5C574F',
                    inverse: '#14100C',
                },
                state: {
                    success: '#4ADE9B',
                    warning: '#F5B544',
                    danger: '#F87171',
                    info: '#5FA8F5',
                    confirmed: '#3FD3B0',
                    shipped: '#A78BFA',
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
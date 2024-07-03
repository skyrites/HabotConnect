/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        container: {
            center: true,
        },
        fontFamily: {
            body: ['"Poppins"', 'sans-serif'],
        },
        extend: {
            colors: {
                primary: '#00732F',
                secondary: '#EB7150',
                third: '#123557',
                white: '#ffffff',
                headerMenu: '#6D6E71',
                'black-1': '#222222',
                'black-2': '#6B7280',
                'light-blue': '#E8FBFF',
                'primary-green': '#00732F',
                'secondary-green': '#015423',
                'primary-orange': '#EB7150',
                'secondary-orange': '#d96849',
                'third-orange': '#E7760D',
                'primary-blue': '#072F57',
            },
        },
    },
    plugins: [],
};

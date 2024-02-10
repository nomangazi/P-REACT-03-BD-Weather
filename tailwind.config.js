/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            spacing: {
                1.5: '0.375rem',
                7: '1.75rem',
                7.5: '1.875rem'
            },
            fontFamily: {
                inter: ['Inter', 'sans-serif']
            }
        }
    },
    plugins: []
};

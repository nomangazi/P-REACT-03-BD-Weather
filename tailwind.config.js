/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,jsx,tsx}'],
    theme: {
        extend: {
            maxWidth: {
                '7xl': '1200px'
            },
            colors: {
                success: '#22C55E',
                warning: '#FACC15',
                error: '#F75555',
                'primary-color': '#130F40',
                'primary-900': '#2B2754',
                'primary-700': '#5A577A',
                'primary-500': '#8987A0',
                'primary-300': '#B9B7C6',
                'primary-100': '#E8E7EC',
                'primary-50': '#F3F3F5',
                'secondary-900': '#AE00B9',
                'secondary-700': '#C74DCE',
                'secondary-500': '#D780DC',
                'secondary-300': '#E7B3EA',
                'secondary-200': '#EFCCF1',
                'secondary-100': '#F7E6F8',
                'secondary-50': '#FBF2FB'
            },
            backgroundImage: {
                'close-icon': "url('../../assets/images/icons/icon-modal-close.svg')",
                'close-icon-hover': "url('../../assets/images/icons/icon-modal-close-bg.svg')",
                'show-icon': "url('../../assets/images/icons/icon-show-password.svg')",
                'hide-icon': "url('../../assets/images/icons/icon-hide-password.svg')",
                'clear-state': "url('../../assets/images/icons/icon-close.svg')",
                'clear-state-hover': "url('../../assets/images/icons/icon-close-bg.svg')"
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif']
            },
            container: {
                maxWidth: '1200px'
            },
            borderColor: {
                'primary-color': '#130F40'
            }
        }
    },
    plugins: []
};

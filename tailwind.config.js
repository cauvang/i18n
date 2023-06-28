/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: { min: '375px', max: '767px' },
      md: { min: '3768px', max: '1023px' },
      lg: { min: '1024px', max: '1279px' },
      xl: { min: '1280px', max: '1440px' },
      '2xl': '1441px',
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: '#F0AC03',
        secondary: '#003399',
        secondaryUK: '#E40F24',
        offWhite: '#FEFBF2',
        offBlack: '#1E1E1E',
        white: '#FFFFFF',
        lightestGrey: '#F1F1F3',
        lightGrey: '#DCDCE0',
        grey: '#96969C',
        greyDark: '#727274',
        lightPink: '#FEF1F2',
        pink: 'rgba(228, 15, 36, 0.5)',

        error: '#DA150B',
        warning: '#D67600',
        success: '#128141',
        info: '#0D84F2',
      },
      fontSize: {
        64: ['64px', { lineHeight: '67px' }],
        15: ['15px', { lineHeight: '13px' }],
        12: ['0.75rem', { lineHeight: '1rem' }],
        '4xl': ['45px', { lineHeight: '50px' }],
        '7xl': ['100px', { lineHeight: '90px' }],
      },
      borderRadius: {
        '4xl': '2rem',
        40: '40px',
      },
      letterSpacing: {
        tightest: '-.01em',
      },
      zIndex: {
        100: '100',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textShadow: {
        DEFAULT: '1px 1px 4px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  variants: {
    extend: {
      padding: ({ theme }) => theme('spacing'),
      margin: ({ theme }) => ({
        auto: 'auto',
        ...theme('spacing'),
      }),
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}

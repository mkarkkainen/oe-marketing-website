const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      gap: {
        custom: 'clamp(2rem, 6vw, 3rem)',
      },
      text: {
        picture: 'min(1.959vw, 0.745em)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      padding: {
        clamp: 'clamp(1rem, 7.82vw, 4.25rem)',
      },
      colors: {
        white: '#F4F4F4',
        dark: 'var(--oe-color-primary-dark)',
        primary: 'var(--oe-color-primary)',
        secondary: 'var(--oe-color-secondary)',
        accent: 'var(--oe-color-accent)',
        default: 'var(--oe-color-text-default)',
        muted: 'var(--oe-color-text-muted)',
      },
      fontSize: {
        '3xl-c': ['clamp(2.4375rem, 5vw, 3.8125rem)', { lineHeight: '1.2em', letterSpacing: '-0.025em' }],
        '2xl-c': ['clamp(1.9375rem, 4.5vw, 3.0625rem)', { lineHeight: '1.2em', letterSpacing: '-0.025em' }],
        base: ['clamp(1rem,2.2vw,1.25rem)', { lineHeight: '1.5em', letterSpacing: '-0.025em', fontWeight: '400' }],
      },
      fontFamily: {
        sans: ['var(--oe-font-sans)', ...defaultTheme.fontFamily.sans],
        serif: ['var(--oe-font-serif)', ...defaultTheme.fontFamily.serif],
        heading: ['var(--oe-font-heading)', ...defaultTheme.fontFamily.sans],
        alt: 'Roboto Slab, serif',
      },
      backgroundImage: {
        linear1:
          'linear-gradient(120deg, rgba(255, 255, 255, 0.00) 15.44%, #EEF7FF 78.17%), linear-gradient(90deg, rgba(235, 245, 255, 0.00) 45.83%, #EEF7FF 91.15%)',
        hero: '',
      },
      screens: {
        'md-custom': '1024px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

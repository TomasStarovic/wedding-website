/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Wedding color palette – adjust to your taste
        blush:   '#e8b4b8',
        sage:    '#8aad9e',
        ivory:   '#faf6f0',
        charcoal:'#3a3a3a',
        gold:    '#c9a96e',
      },
      fontFamily: {
        serif:  ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:   ['"Lato"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

  theme: {
    container: {
      center: true,
      screens: {
        sm: '100%',
        md: '100%',
        lg: '520px',
        xl: '620px',
      },
      padding: '2rem',
    },
    extend: {
      colors: {
        // Dark mode colors
        'theme-background': '#0C151D',
        'highlight-primary': '#6BB5FE',
        'highlight-hover': '#58A3E7',
        'color-text': '#d7d9da',
        'neutral-darkest': '#222222',
        'neutral-dark': '#171F26',
        'neutral-medium': '#555555',
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

  theme: {
    extend: {
      colors: {
        aabb: {
          50: '#f2f7fc',
          100: '#e5eff9',
          200: '#c7ddf0',
          300: '#9fc3e2',
          400: '#6fa4cf',
          500: '#3f82b9',
          600: '#28689d',
          700: '#21547f',
          800: '#1f496a',
          900: '#1d3e59'
        }
      },

      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'],
        display: ['Arial', 'Helvetica', 'sans-serif']
      },

      boxShadow: {
        soft: '0 2px 12px rgba(31, 73, 106, 0.08)',
        card: '0 4px 20px rgba(31, 73, 106, 0.10)'
      }
    }
  },

  plugins: []
};
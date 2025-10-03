/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          brand: {
            50: '#f0f7ff',
            100: '#e0efff',
            200: '#b9ddff',
            300: '#8cc6ff',
            400: '#5eaaff',
            500: '#2f8aff',
            600: '#1d6be6',
            700: '#1856b4',
            800: '#153f82',
            900: '#112b59',
          },
        },
        boxShadow: {
          soft: '0 10px 30px rgba(16, 38, 73, 0.08)',
        },
        borderRadius: {
          xl2: '1rem',
        },
        fontFamily: {
          sans: [
            'Inter',
            'ui-sans-serif',
            'system-ui',
            'Segoe UI',
            'Roboto',
            'Helvetica Neue',
            'Arial',
            'Noto Sans',
            'sans-serif',
          ],
        },
      },
    },
    plugins: [],
  };
  
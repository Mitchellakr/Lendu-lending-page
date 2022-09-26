/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '768px',
      'md': '1090px',
      // 'lg': '2320px',
      'xl': '1440px',
    },
    extend: {
      boxShadow: {
        '3xl': '10px 10px 0px #181818',
      }
    },
  },
  plugins: [],
}

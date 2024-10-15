/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#a9d303',
        secondaryColor: '#509700',
        // secondaryColor: '#9bc008',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': "'Nunito Sans', sans-serif",
        'poppins': "'Poppins', sans-serif"
      }
    },
  },
  // plugins: [require("daisyui")],
  plugins: [
    require('flowbite/plugin')({
      charts: true,
      forms: true,
      tooltips: true
    }),
  ]
}

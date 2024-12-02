/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        tpurple : "#360033",
        tblue : "#0b8793",
        tblack: "#262829"
      }
    },
  },
  plugins: [],
}


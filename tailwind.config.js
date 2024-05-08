/** @type {import('tailwindcss').Config} */

import * as mixins  from "tailwindcss-mixins"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      body:['Parastoo','Inter','sans-serif'],
    },
    extend: {},
  },
  plugins: [
    mixins,
  ],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui:{
    themes:[
      {
        doctortheme:{
           primary: '#0FCFEC',
           secondary: '#19D3AE',
           accent: "#3A4256",
           neutral: "#181A2A",
          "base-100": "#FFFFFF"
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
   plugins: [require("daisyui")],
}

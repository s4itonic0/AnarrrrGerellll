/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundIamge:{
        'my-image' : "url('/Ballet.png')",
      },
      colors:{
        primary:"#3D405B",
        secondary:"#F4F1DE",
        third:"#F2CC8F",
        uniq:"#E07A5F",
        uniq2:"#81B29A",
      },
      container:{
        center:"true",
        padding:{
          default: "1rem",
          sm: "3rem",
        }
      }
    },
  },
  plugins: [],
}
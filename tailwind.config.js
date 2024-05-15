/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*{html,js,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      boxShadow:{
        "normal":"0 1px 10px rbga(0,0,0,0.5)"
      },
      fontFamily: {
        "dana": "Dana",
        "danaBold": "Dana Bold",
        "danaMedium": "Dana Medium",
        "morabba": "Morabba",
        "morabbaBold": "Morabba Bold",
        "morabbaMedium": "Morabba Medium"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '16px',
          lg: '20px'
        }
      },


    },
    screens: {
      'xm': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    }
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > * ');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}



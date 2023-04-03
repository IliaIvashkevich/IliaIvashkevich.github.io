/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{html,js}"],
  theme: {
    colors:{
      very_dark_blue: 'hsl(233, 47%, 7%)',
      dark_desaturated_blue: 'hsl(244, 38%, 16%)',
      soft_violet: 'hsl(277, 64%, 61%)',
      white:'hsl(0, 0%, 100%)',
      slightly_transparent_white:'hsla(0, 0%, 100%, 0.75)',
      slightly_transparent_white_sec:'hsla(0, 0%, 100%, 0.6)',

    },

    fontFamily:{
        'inter':['Inter', 'sans-serif'],
        'lexend_deca':['Lexend Deca', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}


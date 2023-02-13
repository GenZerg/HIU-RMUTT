/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'sans': ['Noto sans','Open Sans','NotosansJP','ui-sans-serif', 'system-ui'],
    },
    screens:{
      '2sm':"640px",
      '1sm':'800px',
      'sm':'1000px',
      'md':'1250px',
      '2xs':'1600px',
      'xs':'1500px',
      'desktop':'1920px',
    },
    extend: {
      colors: {
        'text-red-600': '#F37264',
        'text-blue-600': '#71CCCA'
      },
      width:{
        '100rem':'100rem',
        '20rem':'20rem',
        '25rem':'25rem',
        '30rem':'30rem',
        '40rem':'40rem',
        '45rem':'45rem',
        '70rem':'70rem',
        '110rem':'110rem',
        '20vw':'20vw',

        '30%':'30%',
      },
      height:{
        '10vw':'12vw',
        '20vw':'20vw',
        '10rem':'10rem',
        '20rem':'20rem',
        '25rem':'25rem',
        '30rem':'30rem',
        '35rem':'35rem',
        '22rem':'20rem',
        '30rem':'30rem',
        '70rem':'70rem',

        '30%':'30%',
      },
      boxShadow:{
        '3xl': '9px 6px 0px 7px rgba(0,0,0,1)',
        '1xl': '5px 2px 0px 3px rgba(0,0,0,1)'
      }
    },
  },
  plugins: [],
}
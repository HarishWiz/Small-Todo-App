/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'sea':'url("https://images.pexels.com/photos/1533720/pexels-photo-1533720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
        'sea2':'url("https://images.pexels.com/photos/30395220/pexels-photo-30395220/free-photo-of-serene-coastal-view-with-iconic-south-african-lighthouse.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
      }
    },
  },
  plugins: [],
}


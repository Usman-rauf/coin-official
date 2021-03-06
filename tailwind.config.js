/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ], 
  darkMode: "class",
  
  theme: {
    extend: {},
    backgroundImage: {
      'hero-pattern':
        "linear-gradient(to top, #000 0%, rgba(84, 84, 84, 0.22) 100%), url('../public/Assests/slider 1.png')",
        // 'hero-pattern1':
        // "linear-gradient(to top, #000 0%, rgba(84, 84, 84, 0.22) 100%), url('../public/Assests/slider 2.png')",
        'hero-pattern2':
        "linear-gradient(to top, #000 0%, rgba(84, 84, 84, 0.22) 100%), url('../public/Assests/slider 3.png')",
        'hero-pattern3':
        "linear-gradient(to top, #000 0%, rgba(84, 84, 84, 0.22) 100%), url('../public/Assests/slider 5.png')",
    },
  },
  plugins: [],
}

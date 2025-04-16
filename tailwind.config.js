/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37', // สีทองหรูหราแบบ Royal Gold
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"], // ฟอนต์หรูหราสำหรับ heading
        sans: ["'Kanit'", "'Sukhumvit Set'", "sans-serif"], // ฟอนต์หลักที่ดู modern, รองรับไทย
        heading: ["'Kanit'", "'Sukhumvit Set'", "sans-serif"], // สำหรับ heading โดยเฉพาะ
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',         // สำหรับ Next.js structure
    './components/**/*.{js,ts,jsx,tsx}',  // ถ้ามีโฟลเดอร์ components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

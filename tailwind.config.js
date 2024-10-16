/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // custom컬러 모음
      colors: {
        "future-gray-900": "#0d0f12",
        "future-gray-800": "#020914",
        "future-gray-100": "#cccfd0",
        "future-blue-400": "#00deff",
        "future-green-400": "#33fda8",
      },
      fontSize: {
        86: ["5.375rem", { lineHeight: "1.2" }], // 86px을 rem으로 변환
      },

      backgroundImage: {
        "hero-layer": "url('../public/images/hero-layer.png')",
        "section-layer": "url('../public/images/section-bg-layer.png')",
      },
    },
  },
  plugins: [],
};

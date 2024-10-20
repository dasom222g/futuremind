/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit", // 코드에서 사용된 클래스를 실시간으로 분석하여 사용된 클래스만 빌드
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    {
      pattern: /future-./, // future-로 시작하는 모든 클래스 이름은 제거되지 않음
    },
  ],
  theme: {
    extend: {
      // custom컬러 모음
      colors: {
        "future-gray-700": "#000c13", // sub bg
        "future-gray-800": "#020914",
        "future-gray-900": "#0d0f12",
        "future-gray-200": "#857e9a",
        "future-gray-100": "#cccfd0",
        "future-blue-400": "#00deff",
        "future-green-400": "#33fda8",
        "future-green-500": "#00ffba", // 메인 설명 카드
        "future-orange-400": "#ff6d28",
        // 서브페이지 컬러
        "future-smart-solution": "#01db73", // 스마트 솔루션
        "future-flatform-develope": "#00ddff", // 플랫폼 개발
        "future-rd-ip-consulting": "#655df9", // R&D / IP 컨설팅
        "future-startup-marketing-branding": "#ff6d28", // 창업 마케팅 / 브랜딩
        "future-ai-lifelong-education": "#e85ef9", // AI 평생교육원
        "future-chungnam-venture-education": "#fbc363", // 충남창업보육협회
        "future-ourim-makers": "#15c049", // 어울림 메이커스
        "future-future-education-culture": "#fff", // 미래교육문화협회
      },
      fontSize: {
        86: ["5.375rem", { lineHeight: "1.2" }], // 86px을 rem으로 변환
        44: ["2.75rem", { lineHeight: "1.2" }], // 44px을 rem으로 변환
      },

      backgroundImage: {
        "hero-layer": "url('../public/images/hero-layer.png')",
        "section-layer": "url('../public/images/section-bg-layer.png')",
        "section-vector": "url('../public/images/section3-bg-vector.png')",
        "gradient-bar": "url('../public/images/gradient-bar.png')",
      },
      writingMode: {
        "vertical-rl": "vertical-rl",
      },
      padding: {
        "1/2": "50%",
        "1/3": "33.3333%",
        "2/3": "66.6667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.6667%",
        "2/6": "33.3333%",
        "3/6": "50%",
        "4/6": "66.6667%",
        "5/6": "83.3333%",
        "1/12": "8.3333%",
        "2/12": "16.6667%",
        "3/12": "25%",
        "4/12": "33.3333%",
        "5/12": "41.6667%",
        "6/12": "50%",
        "7/12": "58.3333%",
        "8/12": "66.6667%",
        "9/12": "75%",
        "10/12": "83.3333%",
        "11/12": "91.6667%",
        full: "100%",
      },
      margin: {
        "1/2": "50%",
        "1/3": "33.3333%",
        "2/3": "66.6667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.6667%",
        "2/6": "33.3333%",
        "3/6": "50%",
        "4/6": "66.6667%",
        "5/6": "83.3333%",
        "1/12": "8.3333%",
        "2/12": "16.6667%",
        "3/12": "25%",
        "4/12": "33.3333%",
        "5/12": "41.6667%",
        "6/12": "50%",
        "7/12": "58.3333%",
        "8/12": "66.6667%",
        "9/12": "75%",
        "10/12": "83.3333%",
        "11/12": "91.6667%",
        full: "100%",
      },
      minWidth: {
        450: "112.5rem", // 1800px
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arcade: ["VT323", "sans-serif"],
        mPlusRounded: ["M PLUS Rounded 1c", "sans-serif"],
        notoSansMono: ["Noto Sans Mono", "sans-serif"],
      },
    },
  },
  plugins: [],
};

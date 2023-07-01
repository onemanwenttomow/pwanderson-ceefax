/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "teletext-red": "rgb(234, 51, 35)",
        "teletext-green": "rgb(117, 251, 76)",
        "teletext-blue": "rgb(0, 0, 245)",
        "teletext-yellow": "rgb(248, 248, 82)",
        "teletext-lightblue": "rgb(115, 247, 249)",
      },
      // lineHeight: {
      //   normal: "1",
      // },
    },
  },
  plugins: [],
};

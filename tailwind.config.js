/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,css,scss}"],
  theme: {
    extend: {
      cursor: {
        open: 'url("/assets/open.svg"), pointer',
      },
    },
  },
  plugins: [require("daisyui")],
};

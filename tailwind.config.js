/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: "hsl(180, 66%, 49%)",
        "dark-violet": "hsl(257, 27%, 26%)",
        gray: "hsl(0, 0%, 75%)",
        "grayish-violet": "hsl(257, 7%, 63%)",
        "very-dark-blue": "hsl(255, 11%, 22%)",
        "very-dark-violet": "hsl(260, 8%, 14%)",
      },
      backgroundImage: {
        'url-mobile' : "url('/bg-shorten-mobile.svg')",
        'url-desktop' : "url('/bg-shorten-desktop.svg')",
        'boost-mobile' : "url('/bg-boost-mobile.svg')",
        'boost-desktop' : "url('/bg-boost-desktop.svg')",
      }
    },
  },
  plugins: [],
};

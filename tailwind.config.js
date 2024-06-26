// tailwind.config.js

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        // Define custom text sizes for paragraphs
        "p-default": "18px", // Default size
        "p-xs": "11px", // Small screen size
      },
      colors: {
        global: "#6C5FBC",
        "global-bg": "#F9F9F9",
        "global-shade": "#2b1b94",
        "blue-gray-300": "#CBD5E1",
        "main-black": "#323142",
      },
      screens: {
        xs: "375px",
        sm: "480px",
        premd: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};

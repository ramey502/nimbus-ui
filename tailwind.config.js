/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        macPrimary: "#007AFF",
        macBackground: "#F5F5F7",
        macGray: "#EBEBEB",
      },
      borderRadius: {
        mac: "8px",
      },
      boxShadow: {
        mac: "0 2px 10px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};

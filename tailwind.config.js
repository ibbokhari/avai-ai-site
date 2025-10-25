
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Riyadh Air–inspired palette (midnight indigo + mint/teal accents)
        midnight: "#1e1b4b",
        dusk: "#312e81",
        mist: "#a7f3d0",
        teal: "#14b8a6",
        cloud: "#e5e7eb"
      },
      borderRadius: {
        "2xl": "1.25rem"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: []
};

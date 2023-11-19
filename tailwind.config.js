/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-bg-dark": "var(--primary-bg-dark)",
        "primary-text-dark": "var(--primary-text-dark)",
        "secondary-text-dark": "var(--secondary-text-dark)",
        "primary-bg-light": "var(--primary-bg-light)",
        "primary-text-light": "var(--primary-text-light)",
        "secondary-text-light": "var(--secondary-text-light)",
        "heading-text": "var(--heading-text)",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};

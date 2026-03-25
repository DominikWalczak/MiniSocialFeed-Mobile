/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          dark: "var(--color-primary-dark)",
          light: "var(--color-primary-light)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          light: "var(--color-secondary-light)",
        },
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        error: {
          light: "var(--color-error-warning-light)",
          DEFAULT: "var(--color-error-warning)",
          dark: "var(--color-error-warning-dark)",
        },
        success: {
          light: "var(--color-success-light)",
          DEFAULT: "var(--color-success)",
          dark: "var(--color-success-dark)",
        },
        text: {
          primary: "var(--color-text-primary)",
          black: "var(--color-text-primary-black)",
          secondary: "var(--color-text-secondary)",
        },
      },
    },
  },
  plugins: [],
};

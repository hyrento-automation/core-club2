/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
        dark: {
          DEFAULT: "#141414",
          card: "#1a1a1a",
          surface: "#0f0f0f",
          bottom: "#0a0a0a",
        },
        grey: {
          body: "#777777",
          light: "#999999",
          dark: "#333333",
          border: "#e5e5e5",
          borderDark: "#262626",
        },
        accent: {
          DEFAULT: "#ef2853",
          hover: "#d91c45",
        },
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Montserrat", "sans-serif"],
        body: ["var(--font-body)", "Poppins", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.2em",
        wider: "0.15em",
        hero: "0.6em",
      },
      lineHeight: {
        tight: "1.08",
        relaxed: "1.8",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
        smooth: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
    },
  },
  plugins: [],
};

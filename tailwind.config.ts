import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#363681",
        secondary: "#2646BA",
        tertiary: "#F3F2F8",
        accent: "#E54F6D",
      },
      keyframes: {
        sparkle: {
          "0%": {
            transform: "scale(0) rotate(0deg)",
          },
          "50%": {
            transform: "scale(1) rotate(90deg)",
          },
          "100%": {
            transform: "scale(0) rotate(180deg)",
          },
        },
        "grow-and-shrink": {
          "0%": {
            transform: "scale(0)",
          },
          "50%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(0)",
          },
        },
        spin: {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(180deg)",
          },
        },
      },
      animation: {
        sparkle: "sparkle 700ms forwards",
        "grow-and-shrink": "grow-and-shrink 700ms forwards",
        spin: "spin 1000ms linear forwards",
      },
    },
  },
  plugins: [],
} satisfies Config;

// tailwind.config.ts

const config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: {
          DEFAULT: "rgb(var(--color-neon-lime) / <alpha-value>)",
        },
        surface: {
          DEFAULT: "rgb(var(--color-surface-dark) / <alpha-value>)",
        },
      },

      // // Add custom font families
      // fontFamily: {
      //   heading: "var(--font-heading)",
      // },
      // Add custom font sizes
      fontSize: {
        hero: "var(--text-hero)",
      },
      // Add custom border radius
      borderRadius: {
        brand: "var(--radius-custom)",
      },
    },
  },
  plugins: [],
};

module.exports = config;

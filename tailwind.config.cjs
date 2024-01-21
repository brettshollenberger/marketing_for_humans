const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
        larken: "larken",
      },
      fontWeight: {
        light: "300",
        normal: "400",
        medium: "500",
        bold: "700",
        black: "800",
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        steel: "#656A9A",
        darksteel: "#33001e",
        orange: "#E44B21",
        cream: "#FFFDF1",
        darkgreen: "#0A4C3B",
        oldgold: "#BAB700",
        champagnepink: "#E3CDBA",
      },
      textColor: {
        default: "var(--color-text)",
        offset: "var(--color-text-offset)",
        steel: "#656A9A",
        darksteel: "#33001e",
        orange: "#E44B21",
        cream: "#FFFDF1",
        darkgreen: "#0A4C3B",
        oldgold: "#BAB700",
        champagnepink: "#E3CDBA",
      },
      minHeight: {
        "75vh": "75vh",
      },
      backgroundImage: {
        "hero-pattern":
          'url("public/hero.png"),linear-gradient(#E44B21,#E44B21)', // E25D10
        triangle:
          "repeating-conic-gradient(    from 0deg at 50% 100%,    #FFFDF1 45deg,    #FFFDF1 135deg,    #E44B21 135deg,    #E44B21 225deg  )",
      },
      backgroundSize: { "hero-size": "contain,auto" },
      backgroundColor: {
        default: "#FFFDF1",
        offset: "var(--color-background-offset)",
        steel: "#656A9A",
        darksteel: "#33001e",
        cream: "#FFFDF1",
        orange: "#E44B21",
        darkgreen: "#0A4C3B",
        oldgold: "#BAB700",
        champagnepink: "#E3CDBA",
      },
      borderColor: {
        default: "var(--color-border)",
        darksteel: "#E2E8F0",
      },
    },
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [require("tailwindcss-fluid-type"), require("tailwindcss-patterns")],
};

// darksteel: "#392353",
// rgb(51, 0, 30)

// cream: #FFFDF1

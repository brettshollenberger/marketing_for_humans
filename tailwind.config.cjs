const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px", // Adding an extra small breakpoint
        // sm: Small - Applies to screens ≥640px.
        // md: Medium - Applies to screens ≥768px.
        // lg: Large - Applies to screens ≥1024px.
        // xl: Extra Large - Applies to screens ≥1280px.
        // 2xl: 2X Large - Applies to screens ≥1536px.
        "3xl": "1600px", // Adding a larger breakpoint
        "4xl": "1720px", // 4X large screens
        "5xl": "1920px", // 4X large screens
        "6xl": "2240px", // 5X large screens
        "7xl": "2400px", // 5X large screens
        "8xl": "2560px", // 6X large screens
        "9xl": "2880px", // 7X large screens
        "10xl": "3200px", // 8X large screens
        "10xl": "3520px", // 9X large screens
        "10xl": "3840px", // 10X large screens
        "11xl": "4160px", // 11X large screens
        "12xl": "4480px", // 12X large screens
        "13xl": "4800px", // 13X large screens
        "14xl": "5120px", // 14X large screens
        "15xl": "5440px", // 15X large screens
      },
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
        secondary: "#E44B21",
        steel: "#656A9A",
        darksteel: "#33001e",
        orange: "#E44B21",
        cream: "#FFFDF1",
        oldgold: "#BAB700",
        champagnepink: "#E3CDBA",
        yellow: "#f39237",
        darkgreen: "#042A2B",
      },
      textColor: {
        default: "var(--color-text)",
        offset: "var(--color-text-offset)",
        steel: "#656A9A",
        darksteel: "#33001e",
        orange: "#E44B21",
        cream: "#FFFDF1",
        oldgold: "#BAB700",
        champagnepink: "#E3CDBA",
        yellow: "#f39237",
        darkgreen: "#042A2B",
      },
      minHeight: {
        "75vh": "75vh",
      },
      backgroundImage: {
        "hero-pattern": 'url("/hero.png"),linear-gradient(#DB3132,#DB3132)', // E25D10
        "nadia-pattern":
          'url("/headshots/homepage.png"),linear-gradient(#E0593F,#E0593F)', // E25D10
        "hero-pattern-mobile":
          'url("/hero_mobile.png"),linear-gradient(#DB3132,#DB3132)', // E25D10
        triangle:
          "repeating-conic-gradient(    from 0deg at 50% 100%,    #FFFDF1 45deg,    #FFFDF1 135deg,    #DB3132 135deg,    #DB3132 225deg  )",
        triangle:
          "repeating-conic-gradient(    from 0deg at 50% 100%,    #FFFDF1 45deg,    #FFFDF1 135deg,    transparent 135deg,    transparent 225deg  )",
        highlight:
          "url(https://s2.svgbox.net/pen-brushes.svg?ic=brush-9&color=fffDF1)",
        "highlight-orange":
          "url(https://s2.svgbox.net/pen-brushes.svg?ic=brush-9&color=E44B21)",
        "highlight-champagne":
          "url(https://s2.svgbox.net/pen-brushes.svg?ic=brush-9&color=E3CDBA)",
        "highlight-darkgreen":
          "url(https://s2.svgbox.net/pen-brushes.svg?ic=brush-9&color=042A2B)",
      },
      backgroundSize: {
        "hero-size": "contain,auto",
        95: "95% auto",
        90: "90% auto",
        85: "85% auto",
        80: "80% auto",
        75: "75% auto",
        70: "70% auto",
        65: "65% auto",
        60: "60% auto",
        55: "55% auto",
        50: "50% auto",
        45: "45% auto",
        40: "40% auto",
        35: "35% auto",
        30: "30% auto",
        25: "25% auto",
        22: "22% auto",
        20: "20% auto",
        15: "15% auto",
        10: "10% auto",
        5: "5% auto",
      },
      backgroundColor: {
        default: "#FFFDF1",
        offset: "var(--color-background-offset)",
        steel: "#656A9A",
        darksteel: "#33001e",
        cream: "#FFFDF1",
        orange: "#E44B21",
        oldgold: "#BAB700",
        champagnepink: "#E3CDBA",
        yellow: "#f39237",
        darkgreen: "#042A2B",
        // hero: "#DB3132",
        hero: "#E44B21",
      },
      borderColor: {
        default: "var(--color-border)",
        darksteel: "#E2E8F0",
        champagnepink: "#E3CDBA",
      },
    },
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [
    require("tailwindcss-fluid-type"),
    require("tailwindcss-patterns"),
    require("tw-elements/dist/plugin"),
  ],
};

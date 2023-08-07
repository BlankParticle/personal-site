/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require("tailwindcss/defaultTheme");

/**
 * @param {string[]} colors
 * @returns {Record<string, {stroke: string}>}
 */
const rainbowStrokeAnimator = (colors) => {
  colors = colors.map((c) => `#${c}`);
  /** @type {Record<string, {stroke: string}>} */
  let keyframes = {};
  colors.forEach((c, i) => {
    keyframes[`${i * (100 / colors.length)}%`] = { stroke: c };
  });
  keyframes["100%"] = { stroke: colors[0] };
  return keyframes;
};

/** @type {import("tailwindcss").Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["SpaceGrotesk", ...defaultTheme.fontFamily.sans],
        body: ["Satoshi", ...defaultTheme.fontFamily.sans],
        mono: ["JetBrainsMono", ...defaultTheme.fontFamily.mono],
      },
      colors: {
        brand: "#ffb956",
      },
      keyframes: {
        floating: {
          "0%, 100%": { transform: "translateY(15px);" },
          "50%": { transform: "translateY(-5px);" },
        },
        rainbow: rainbowStrokeAnimator([
          "fac89e",
          "e3e891",
          "c2fc99",
          "a3fcb3",
          "92e8d5",
          "96c8f2",
          "ada8ff",
          "ce94f7",
          "ed94dd",
          "fea8bb",
        ]),
      },
      animation: {
        floating: "floating 10s ease-in-out infinite",
        rainbow: "rainbow 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
  experimental: {
    optimizeUniversalDefaults: true,
  },
};

module.exports = config;

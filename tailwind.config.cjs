/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require("tailwindcss/defaultTheme");

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
    },
  },
  plugins: [],
  experimental: {
    optimizeUniversalDefaults: true,
  },
};

module.exports = config;

// tailwind.config.js
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Ajusta según tu estructura de carpetas
    "./node_modules/@nextui-org/react/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [nextui()],
};

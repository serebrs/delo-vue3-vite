module.exports = {
  content: ["./src/*.{vue,js}", "./src/**/*.{vue,html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};

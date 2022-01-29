console.log(process.env.NODE_ENV);
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: process.env.NODE_ENV === "development",
  },
  prefix: "cm-",
};

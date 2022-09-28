module.exports = {
  content: ["./src/componants/**/*.js", "./pages/**/*.js"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        hero: "url('../../public/home1.jpg')",
        s2bg: "url('../../public/s2bg.svg')",
      },
      padding: { "fluid-video": "56.25%" },
      colors: {},
      fontfamily: {},

      screens: {
        xs: { max: "321px" },
        xsm: { max: "352px" },
      },
    },
  },
  variants: {},
  plugins: [require("tailwindcss"), require("precss"), require("autoprefixer")],
};

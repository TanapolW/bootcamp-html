tailwind.config = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      // you can add configuration (customization) here
      colors: {
        primary: "#DEF81D",
        "wd-white": "#FFFFFF",
        "wd-grey": "#999999",
        "wd-darkgrey": "#2D2D2D",
        "wd-black": "#080808",
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to left, rgba(0,0,0, 0), rgba(0,0,0,1)), url('assets/hero.jpg')",
      },
    },
  },
};

// module.exports = tailwind.config;

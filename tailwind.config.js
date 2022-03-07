module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionDelay: {
        0: "0ms",
        4000: "4000ms",
      },
      transformOrigin: {
        "top-left": "70% 70%",
      },
      animation: {
        slide: "slide 2s ease-in-out",
        breath: "breath 4s ease-in-out infinite",
        fade: "fade 2s ease-out",
        slidedown: "slidedown .5s ease-out",
        wave: "wave 2.5s infinite",
        reveal: "reveal 1s ease-in-out",
        slideup: "slideup 2s ease-out",
      },
      keyframes: {
        slide: {
          "0%": { opacity: "0%", transform: "translateX(0.5rem)" },
          "100%": { opacity: "100%", transform: "translateX(0px)" },
        },
        slideup: {
          "0%": { opacity: "0%" },
          "50%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        reveal: {
          "0%": { opacity: "0%", transform: "translateY(0.5rem)" },
          "100%": { opacity: "100%", transform: "translateY(0px)" },
        },
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10deg)" },
          "60%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        slidedown: {
          "0%": { opacity: "0%", transform: "translateY(5px)" },
          "100%": { opacity: "100%", transform: "translateY(0px)" },
        },
        breath: {
          "0%": { opacity: "10%" },
          "50%": { opacity: "50%" },
          "100%": { opacity: "10%" },
        },
        fade: {
          "0%": {
            opacity: "0",
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      spacing: {
        53: "205px",
        63: "253px",
        95: "380px",
        100: "28rem",
        144: "36rem",
        184: "46rem",
        208: "52rem",
        232: "58rem",
        300: "72rem",
      },
      zIndex: {
        "-10": "-10",
        100: "100",
        150: "150",
        200: "200",
        250: "250",
        300: "300",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

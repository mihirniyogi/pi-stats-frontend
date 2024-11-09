/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#252627",
        card: "#3D3D3C",
        progressbar: "#CFCBCA",
        jadegreen: "#04A777",
        flagyellow: "#7E980B",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: [
          "Source Code Pro",
          "ui-serif",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif",
        ],
      },
      animation: {
        blink: "blink 10s ease-in-out infinite", // 'blink' here refers to the keyframe below
      },
      keyframes: {
        blink: {
          "0%, 70%": { opacity: "1" }, // Stay at opacity 1 for 70% of the time
          "85%": { opacity: "0" }, // Blink at opacity - after 70%
          "100%": { opacity: "1" }, // Return to opacity 1 at the end
        },
      },
    },
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        dmSans: ["var(--font-dm-sans)"],
        poppins: ["var(---font-poppins)"],
      },
      colors: {
        gray40: "#9CA3AF",
        gray90: "#111827",
        grey30: "rgba(243, 244, 246, 0.50)",
        "grey-300": "#D1D5DB",
        "rose/700": "#BE123C",
        gray50: "#6B7280",
      },
    },
  },
  plugins: [],
};

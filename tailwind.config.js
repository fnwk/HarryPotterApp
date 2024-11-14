/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontSize: {
        sm: 10,
        base: 12,
        md: 16,
        lg: 18,
        xl: 22,
      },
      fontFamily: {
        interRegular: ["Inter_400Regular"],
        interMedium: ["Inter_500Medium"],
        interSemiBold: ["Inter_600SemiBold"],
        interBold: ["Inter_700Bold"],
        interBlack: ["Inter_900Black"],
      },
      colors: {
        primary: "var(--color-primary)",
        background: "var(--color-background)",
        alpha: "var(--color-alpha)",
        beta: "var(--color-beta)",
        gamma: "var(--color-gamma)",
      },
    },
  },
  plugins: [
    ({ addBase }) =>
      addBase({
        ":root": {
          "--color-primary": "#EDF2F4",
        },
      }),
  ],
};

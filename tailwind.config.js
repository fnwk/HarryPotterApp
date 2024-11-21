const config = {
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
        loading: "var(--color-loading)",
        alpha: "var(--color-alpha)",
        beta: "var(--color-beta)",
        gamma: "var(--color-gamma)",
        input: "#8D99AE",
        pinkyRed: "#fa2770",
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

module.exports = config;

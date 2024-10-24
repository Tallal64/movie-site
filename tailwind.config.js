/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Oswald", "sans-serif"],
        body: ["Inter", "sans-serif"],
        title: ["Bebas Neue", "cursive"], // Title font
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))", // Deep Charcoal
        foreground: "hsl(var(--foreground))", // Light Text

        card: {
          DEFAULT: "hsl(var(--card))", // Same as background
          foreground: "hsl(var(--card-foreground))", // Light Text
        },
        popover: {
          DEFAULT: "hsl(var(--popover))", // Same as background
          foreground: "hsl(var(--popover-foreground))", // Light Text
        },
        primary: {
          DEFAULT: "hsl(var(--primary))", // Vibrant Red
          foreground: "hsl(var(--primary-foreground))", // Light Text
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))", // Golden Yellow
          foreground: "hsl(var(--secondary-foreground))", // Light Gray
        },
        muted: {
          DEFAULT: "hsl(var(--muted))", // Light Gray
          foreground: "hsl(var(--muted-foreground))", // Medium Gray
        },
        accent: {
          DEFAULT: "hsl(var(--accent))", // Cool Cyan
          foreground: "hsl(var(--accent-foreground))", // Light Gray
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))", // Darker Red
          foreground: "hsl(var(--destructive-foreground))", // Light Text
        },
        border: "hsl(var(--border))", // Light Gray
        input: "hsl(var(--input))", // Light Gray
        ring: "hsl(var(--ring))", // Cool Cyan
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

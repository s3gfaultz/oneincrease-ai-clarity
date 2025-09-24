import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      backgroundImage: {
        "gradient-hero": "var(--gradient-hero)",
        "gradient-secondary": "var(--gradient-secondary)", 
        "gradient-subtle": "var(--gradient-subtle)",
        "gradient-card": "var(--gradient-card)",
        "gradient-glass": "var(--gradient-glass)",
        "gradient-accent": "var(--gradient-accent)",
        "gradient-blue-red": "var(--gradient-blue-red)",
      },
      boxShadow: {
        "luxury": "var(--shadow-luxury)",
        "card": "var(--shadow-card)",
        "glow": "var(--shadow-glow)",
        "red": "var(--shadow-red)",
        "blue": "var(--shadow-blue)", 
        "orange": "var(--shadow-orange)",
      },
      backdropBlur: {
        xs: "2px",
        glass: "12px",
      },
      transitionTimingFunction: {
        "luxury": "cubic-bezier(0.16, 1, 0.3, 1)",
        "smooth": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "breathe": {
          "0%, 100%": {
            transform: "scale(1)",
            opacity: "0.2",
          },
          "50%": {
            transform: "scale(1.1)",
            opacity: "0.3",
          },
        },
        "gentle-wave": {
          "0%, 100%": {
            transform: "translateX(0%) translateY(0%) rotate(0deg)",
            opacity: "0.1",
          },
          "33%": {
            transform: "translateX(2%) translateY(-1%) rotate(1deg)",
            opacity: "0.15",
          },
          "66%": {
            transform: "translateX(-1%) translateY(2%) rotate(-0.5deg)",
            opacity: "0.12",
          },
        },
        "morph": {
          "0%, 100%": {
            borderRadius: "50% 50% 50% 50%",
            transform: "scale(1) rotate(0deg)",
          },
          "25%": {
            borderRadius: "60% 40% 50% 50%",
            transform: "scale(1.05) rotate(90deg)",
          },
          "50%": {
            borderRadius: "50% 60% 40% 50%",
            transform: "scale(0.95) rotate(180deg)",
          },
          "75%": {
            borderRadius: "50% 50% 60% 40%",
            transform: "scale(1.02) rotate(270deg)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

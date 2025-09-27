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
        "orbit-large": {
          "0%": {
            transform: "translate(-50%, -50%) rotate(0deg) translateX(150px) rotate(0deg)",
          },
          "100%": {
            transform: "translate(-50%, -50%) rotate(360deg) translateX(150px) rotate(-360deg)",
          },
        },
        "orbit-medium": {
          "0%": {
            transform: "translate(-50%, -50%) rotate(0deg) translateX(100px) rotate(0deg)",
          },
          "100%": {
            transform: "translate(-50%, -50%) rotate(-360deg) translateX(100px) rotate(360deg)",
          },
        },
        "orbit-small": {
          "0%": {
            transform: "translate(-50%, -50%) rotate(0deg) translateX(200px) rotate(0deg)",
          },
          "100%": {
            transform: "translate(-50%, -50%) rotate(360deg) translateX(200px) rotate(-360deg)",
          },
        },
        "float-up": {
          "0%": {
            transform: "translateY(100vh) scale(0)",
            opacity: "0",
          },
          "10%": {
            opacity: "1",
          },
          "90%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateY(-100px) scale(1)",
            opacity: "0",
          },
        },
        "pulse-glow": {
          "0%, 100%": {
            transform: "scale(1)",
            opacity: "0.2",
          },
          "50%": {
            transform: "scale(1.1)",
            opacity: "0.4",
          },
        },
        "flow-right": {
          "0%": {
            transform: "translateX(-100%) skewX(-15deg)",
            opacity: "0",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateX(100%) skewX(-15deg)",
            opacity: "0",
          },
        },
        "flow-left": {
          "0%": {
            transform: "translateX(100%) skewX(15deg)",
            opacity: "0",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateX(-100%) skewX(15deg)",
            opacity: "0",
          },
        },
        "morph-scale": {
          "0%, 100%": {
            borderRadius: "50%",
            transform: "scale(1)",
          },
          "25%": {
            borderRadius: "60% 40%",
            transform: "scale(1.1)",
          },
          "50%": {
            borderRadius: "40% 60%",
            transform: "scale(0.9)",
          },
          "75%": {
            borderRadius: "55% 45%",
            transform: "scale(1.05)",
          },
        },
        "streak": {
          "0%": {
            transform: "translateX(-100%) skewX(-45deg)",
            opacity: "0",
          },
          "50%": {
            opacity: "1",
          },
          "100%": {
            transform: "translateX(100%) skewX(-45deg)",
            opacity: "0",
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

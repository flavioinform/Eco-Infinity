import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        ecoinfinity: {
          dark: '#1D4088',       // Azul Oscuro
          medium: '#3474BE',     // Azul Medio
          cyan: '#70C3D4',       // Cian/Turquesa
          neon: '#A0F0DF',       // Aguamarina Brillante
          gray: '#D8E2F0',       // Gris Azulado Claro
          white: '#FFFFFF',      // Blanco
        },
        primary: {
          50: "#FFFFFF",
          100: "#D8E2F0",
          200: "#D8E2F0",
          300: "#70C3D4",
          400: "#A0F0DF",
          500: "#1D4088",
          600: "#1D4088",
          700: "#1D4088",
          800: "#1D4088",
          900: "#1D4088",
          950: "#1D4088",
        },
        accent: {
          400: "#70C3D4",
          500: "#A0F0DF",
          600: "#3474BE",
        },
        brand: {
          black: "#1D4088",
          dark: "#FFFFFF",
          darker: "#D8E2F0",
          card: "#FFFFFF",
          border: "#1D4088",
        },
        sage: {
          DEFAULT: "#70C3D4",
          100: "#D8E2F0",
          200: "#D8E2F0",
          300: "#70C3D4",
          400: "#A0F0DF",
        },
        cream: {
          DEFAULT: "#FFFFFF",
        },
        forest: {
          DEFAULT: "#1D4088",
          hover: "#3474BE",
        },
        mascot: {
          yellow: "#A0F0DF",
        },
      },
      boxShadow: {
        'cartoon': '4px 4px 0px 0px #1D4088',
        'cartoon-lg': '6px 6px 0px 0px #1D4088',
        'cartoon-yellow': '3px 3px 0px 0px #A0F0DF',
        'neon-glow': '0 0 15px rgba(160, 240, 223, 0.4), 0 0 30px rgba(112, 195, 212, 0.2)',
        'soft-depth': '0 10px 25px -5px rgba(29, 64, 136, 0.08), 0 8px 10px -6px rgba(29, 64, 136, 0.04)',
        'planet-shadow': '0 20px 40px -15px rgba(29, 64, 136, 0.15)'
      },
      fontFamily: {
        sans: ["DejaVu Serif", "Outfit", "Inter", ...defaultTheme.fontFamily.sans],
        serif: ["DejaVu Serif", ...defaultTheme.fontFamily.serif],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'slide-up': 'slideUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        'scale-reveal': 'scaleReveal 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
        'glow-pulse': 'glowPulse 2.5s ease-in-out infinite',
        'tetris-fall': 'tetrisFall 12s linear infinite',
        'tetris-drift': 'tetrisDrift 15s ease-in-out infinite',
        'cube-spin': 'cubeSpin 20s linear infinite',
        'cube-spin-rev': 'cubeSpinRev 16s linear infinite',
        'border-glow': 'borderGlow 2s ease-in-out infinite',
        'netflix-intro': 'netflixIntro 1.0s cubic-bezier(0.16,1,0.3,1) forwards',
        'scan-down': 'scanDown 4s linear infinite',
        'neon-flicker': 'neonFlicker 3s ease-in-out infinite',
        'orbit-slow': 'spin 25s linear infinite',
        'float-planet': 'floatPlanet 6s ease-in-out infinite',
        'neon-pulse': 'neonPulse 2.5s ease-in-out infinite'
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-18px) rotate(3deg)' },
          '66%': { transform: 'translateY(-8px) rotate(-2deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleReveal: {
          '0%': { opacity: '0', transform: 'scale(0.88)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(57,255,20,0.3), 0 0 40px rgba(57,255,20,0.06)' },
          '50%': { boxShadow: '0 0 35px rgba(57,255,20,0.7), 0 0 80px rgba(57,255,20,0.2)' },
        },
        tetrisFall: {
          '0%': { transform: 'translateY(-120px) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(110vh) rotate(180deg)', opacity: '0' },
        },
        tetrisDrift: {
          '0%': { transform: 'translateX(0) translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateX(30px) translateY(-20px) rotate(90deg)' },
          '50%': { transform: 'translateX(-20px) translateY(-40px) rotate(180deg)' },
          '75%': { transform: 'translateX(15px) translateY(-20px) rotate(270deg)' },
          '100%': { transform: 'translateX(0) translateY(0) rotate(360deg)' },
        },
        cubeSpin: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.1)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        cubeSpinRev: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        borderGlow: {
          '0%, 100%': { borderColor: 'rgba(57,255,20,0.2)' },
          '50%': { borderColor: 'rgba(57,255,20,0.8)' },
        },
        netflixIntro: {
          '0%': { opacity: '0', transform: 'scale(1.08) translateY(20px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        scanDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh)', opacity: '0' },
        },
        neonFlicker: {
          '0%, 90%, 100%': { opacity: '1' },
          '92%': { opacity: '0.4' },
          '94%': { opacity: '1' },
          '96%': { opacity: '0.6' },
          '98%': { opacity: '1' },
        },
        floatPlanet: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(2deg)' }
        },
        neonPulse: {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 5px #A0F0DF)' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 15px #A0F0DF)' }
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'netflix': 'cubic-bezier(0.37, 0, 0.63, 1)',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

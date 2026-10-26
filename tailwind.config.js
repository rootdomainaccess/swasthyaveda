/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        'clinical-cream': '#F5EFE3',    // Dominant / Background
        'earthy-olive': '#4F5B2A',      // Primary / Text & Major UI
        'golden-bronze': '#B8892D',     // Accent / CTA
        'warm-sand': '#D8C9A8',         // Secondary Backgrounds
      },
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in-out',
        'pulse-gentle': 'pulse-gentle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-gentle': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}
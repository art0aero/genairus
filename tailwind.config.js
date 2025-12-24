/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: '#00f0ff',
          green: '#00ff41',
          purple: '#b026ff',
          pink: '#ff006e',
        },
        dark: {
          primary: '#0a0e27',
          secondary: '#1a1f3a',
          tertiary: '#252d48',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'glow': 'glow 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 10px rgba(0, 240, 255, 0.5)' },
          '50%': { textShadow: '0 0 30px rgba(0, 240, 255, 0.8)' },
        },
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0, 240, 255, 0.5)',
        'neon-green': '0 0 20px rgba(0, 255, 65, 0.5)',
        'neon-purple': '0 0 20px rgba(176, 38, 255, 0.5)',
      },
    },
  },
  plugins: [],
};

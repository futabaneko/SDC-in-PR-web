/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#22C55E',
          dark: '#16A34A',
        },
        danger: '#EF4444',
        warning: '#F59E0B',
        success: '#10B981',
        neutral: {
          text: {
            primary: '#1E293B',
            secondary: '#64748B',
            disabled: '#94A3B8',
          },
          border: '#E2E8F0',
          bg: '#F8FAFC',
          surface: '#FFFFFF',
        }
      },
      fontFamily: {
        sans: ['"Inter"', '"Noto Sans JP"', 'sans-serif'],
        display: ['"Inter"', '"Noto Sans JP"', 'sans-serif'],
        title: ['"Consolas"', '"Noto Sans Mono"', 'monospace'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace']
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FAF9F3',
        cream: '#F0F2E9',
        ink: '#11130F',
        muted: '#11130F',
        navy: '#1F5138',
        blue: '#2D6A4A',
        gold: '#6E8B68',
        goldLight: '#DCE8D8',
        leaf: '#477653',
        line: '#D9E1D6',
        card: '#FFFDF8'
      },
      fontFamily: {
        sans: ['DM Sans', 'Noto Sans Devanagari', 'sans-serif'],
        display: ['Playfair Display', 'Noto Sans Devanagari', 'serif'],
        hindi: ['Noto Sans Devanagari', 'sans-serif']
      },
      boxShadow: {
        soft: '0 20px 60px rgba(31, 81, 56, 0.12)'
      }
    }
  },
  plugins: []
}

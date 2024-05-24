/** @type {import('tailwindcss').Config} */

import daisyui from 'daisyui';
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      quieta: '#4AB726',
      jugador1: '#0AADFF',
      consejoMaquina: '#FF9D7F',
      consejoHumano: '#69D7FF',
      jugador2: '#FF4332',
      consejo: '#ffffff',
      white: '#ffffff',
      black: '#000000',
      blue: {
        50: '#eff5ff',
        100: '#dbe8fe',
        200: '#bfd7fe',
        300: '#93bbfd',
        400: '#609afa',
        500: '#3b82f6',
        600: '#2570eb',
        700: '#1d64d8',
        800: '#1e55af',
        900: '#1e478a',
        950: '#172e54'
      },
      gray: {
        50: '#f5f7f8',
        100: '#eeeff1',
        200: '#dfe2e6',
        300: '#cbd1d6',
        400: '#b5bbc4',
        500: '#9ca3af',
        600: '#8b90a0',
        700: '#787d8a',
        800: '#626671',
        900: '#52555d',
        950: '#303236'
      }
    },
    extend: {
      fontFamily: {
        'press-start-2p': ['Press Start 2P', 'regular'],
        'prosto-one': ['Prosto One', 'regular'],
        platypi: ['Platypi', 'serif'],
        caveat: ['Caveat', 'cursive']
      }
    }
  },
  plugins: [daisyui]
};

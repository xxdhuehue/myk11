import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: {
        '70': '20rem',
        '80': '24rem',
        '90': '28rem',
        '100': '32rem',
        '110': '36rem',
        '120': '40rem',
        '130': '44rem',
        '140': '48rem',
        '150': '52rem',
        '160': '56rem',
        '170': '60rem',
        '180': '64rem',
        '190': '68rem',
        '200': '72rem'
      },
      backgroundColor: {
        "k11_pc_mask_bg": "rgba(0, 0, 0, .5)",
        "k11_mobile_mask_bg": "rgba(0, 0, 0)",
      },
      zIndex:{
        100: "100"
      }
    },
  },
  plugins: [],
}
export default config

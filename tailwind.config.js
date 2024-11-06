/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        'down-shadow': '0 2px 5px rgba(0, 0, 0, 0.02)',
        'up-shadow': '0 -2px 5px rgba(0, 0, 0, 0.02)',
        'drop': '0 0 6px rgba(0, 0, 0, 0.08)',
        'inner': '0 0 -6px rgba(19, 101, 232, 0.08)'
      },
      aspectRatio: {
        bg: '393/150'
      },
      borderRadius: {
        base: '10px',
        little: '5px'
      },
      colors: {
        "grey": '#E7E7E7',
        "dark": '#1A1A1A',
        "dark-grey": '#828282',
        "light-grey": '#FAFAFA',
        "blue": '#1365E8',
        "light-blue": '#A1DEFF',
        "red": '#FF0000',
        "green": '#00C300',
        "white": '#FFFFFF'
      },
      fontSize: {
        'title': '18px',
        'l-title': '16px',
        'subtitle': '14px',
        'base': '12px',
        'l-base': '10px',
        'title-t': '24px',
        'l-title-t': '18px',
        'subtitle-t': '16px',
        'base-t': '14px',
        'l-base-t': '10px',
        'title-d': '30px',
        'l-title-d': '20px',
        'subtitle-d': '18px',
        'base-d': '16px',
        'l-base-d': '12px'
      },
      screens: {
        desktop: '900px',
        tablet: '700px',
        mobile: '400px'
      },
      gap: {
        'base': '10px',
        'tab-base': '15px'
      }
    },
  },
  plugins: [],
};

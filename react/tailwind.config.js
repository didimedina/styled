/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        base: generateScale("slate"),
        brand: generateScale("purple")
      }
    },
  },
  plugins: [],
}

function generateScale(name) {
  let scale = Array.from({ length: 12 }, (_, i) => {
    let id = i + 1;
    return [
      [id, `rgb(var(--${name}-${id}) / <alpha-value>)`],
      // [`a${id}`, `rgb(var(--${name}-a${id})/ <alpha-value>)`],
    ];
  }).flat();

  return Object.fromEntries(scale);
}
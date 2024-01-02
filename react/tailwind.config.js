/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        gray: generateScale("gray"),
        slate: generateScale("slate"),
        orange: generateScale("orange"),
        brand: generateScale("tomato"),
        base: generateScale("slate")
      }
    },
  },
  plugins: [],
}


function generateScale(name) {
  let scale = Array.from({ length: 12 }, (_, i) => {
    let id = i + 1;
    return [
      [id, `var(--${name}-${id})`],
      [`a${id}`, `var(--${name}-a${id})`],
    ];
  }).flat();

  return Object.fromEntries(scale);
}
// function generateScale(name) {
//   let scale = Array.from({ length: 12 }, (_, i) => {
//     let id = i + 1;
//     return [
//       [id, `rgb(var(--${name}-${id}) / <alpha-value>)`],
//       [`a${id}`, `rgb(var(--${name}-a${id})/ <alpha-value>)`],
//     ];
//   }).flat();

//   return Object.fromEntries(scale);
// }
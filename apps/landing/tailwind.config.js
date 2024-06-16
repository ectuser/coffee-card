const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#635bff",
          "primary-content": "#ffffff",
          "secondary": "#00d4ff",
          "accent": "#fde047",
          "neutral": "#d1d5db",
          "base-100": "#f6f9fc",
          "info": "#0000ff",
          "success": "#34d399",
          "warning": "#fde047",
          "error": "#ef4444",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
};

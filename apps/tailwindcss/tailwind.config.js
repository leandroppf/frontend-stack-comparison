/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        100: "25rem",
      },
    },
    colors: {
      // Light
      "gray50-l": "#f5f5f5",
      "gray100-l": "#e6e6e6",
      "gray200-l": "#cccccc",
      "gray300-l": "#b3b3b3",

      "cyan50-l": "#ecfeff",
      "cyan100-l": "#cffafe",
      "cyan200-l": "#a5f3fc",
      "cyan300-l": "#67e8f9",

      "indigo50-l": "#eef2ff",
      "indigo100-l": "#e0e7ff",
      "indigo200-l": "#c7d2fe",
      "indigo300-l": "#a5b4fc",

      "emerald50-l": "#ecfdf5",
      "emerald100-l": "#d1fae5",
      "emerald200-l": "#a7f3d0",
      "emerald300-l": "#6ee7b7",

      "red50-l": "#fef2f2",
      "red100-l": "#fee2e2",
      "red200-l": "#fecaca",
      "red300-l": "#fca5a5",

      "background-l": "#fafafa",
      "textDefault-l": "#111827",

      // Dark
      "gray50-d": "#111827",
      "gray100-d": "#1f2937",
      "gray200-d": "#374151",
      "gray300-d": "#4b5563",

      "cyan50-d": "#164e63",
      "cyan100-d": "#155e75",
      "cyan200-d": "#0e7490",
      "cyan300-d": "#0891b2",

      "indigo50-d": "#312e81",
      "indigo100-d": "#3730a3",
      "indigo200-d": "#4338ca",
      "indigo300-d": "#4f46e5",

      "emerald50-d": "#064e3b",
      "emerald100-d": "#065f46",
      "emerald200-d": "#047857",
      "emerald300-d": "#059669",

      "red50-d": "#7f1d1d",
      "red100-d": "#991b1b",
      "red200-d": "#b91c1c",
      "red300-d": "#dc2626",

      "background-d": "#171717",
      "textDefault-d": "#f9fafb",
    },
  },
  plugins: [],
};

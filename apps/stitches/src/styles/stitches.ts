import { createStitches } from "@stitches/react";

import { sizes } from "./sizes";

export const { styled, css, getCssText, createTheme, globalCss } =
  createStitches({
    theme: {
      colors: {
        gray50: "#f5f5f5",
        gray100: "#e6e6e6",
        gray200: "#cccccc",
        gray300: "#b3b3b3",

        cyan50: "#ecfeff",
        cyan100: "#cffafe",
        cyan200: "#a5f3fc",
        cyan300: "#67e8f9",

        indigo50: "#eef2ff",
        indigo100: "#e0e7ff",
        indigo200: "#c7d2fe",
        indigo300: "#a5b4fc",

        emerald50: "#ecfdf5",
        emerald100: "#d1fae5",
        emerald200: "#a7f3d0",
        emerald300: "#6ee7b7",

        red50: "#fef2f2",
        red100: "#fee2e2",
        red200: "#fecaca",
        red300: "#fca5a5",

        background: "#fafafa",
        textDefault: "#111827",
      },
      sizes: {
        1: "0.25rem",
        2: "0.5rem",
        4: "1rem",
        8: "2rem",
        12: "3rem",
        16: "4rem",
        20: "5rem",
        40: "10rem",
        60: "15rem",
        80: "20rem",
        100: "25rem",
      },
    },
  });

export const darkTheme = createTheme("dark-theme", {
  colors: {
    gray50: "#111827",
    gray100: "#1f2937",
    gray200: "#374151",
    gray300: "#4b5563",

    cyan50: "#164e63",
    cyan100: "#155e75",
    cyan200: "#0e7490",
    cyan300: "#0891b2",

    indigo50: "#312e81",
    indigo100: "#3730a3",
    indigo200: "#4338ca",
    indigo300: "#4f46e5",

    emerald50: "#064e3b",
    emerald100: "#065f46",
    emerald200: "#047857",
    emerald300: "#059669",

    red50: "#7f1d1d",
    red100: "#991b1b",
    red200: "#b91c1c",
    red300: "#dc2626",

    background: "#171717",
    textDefault: "#f9fafb",
  },
});

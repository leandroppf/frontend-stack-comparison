import { styled } from "../styles/stitches";

export const AppRoot = styled("div", {
  background: "$background",
  minHeight: "100vh",
});

export const Main = styled("main", {
  background: "$background",
});

export const Text = styled("span", {
  color: "$textDefault",
  fontSize: "$md",

  variants: {
    size: {
      sm: {
        fontSize: "$sm",
      },
      lg: {
        fontSize: "$lg",
      },
    },
    color: {
      red: {
        color: "$red300",
      },
      green: {
        color: "$emerald300",
      },
      blue: {
        color: "$cyan300",
      },
    },
  },
});

export const FlexColumn = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$8",
  margin: "0 auto",
  maxWidth: "$100",

  variants: {
    center: {
      true: {
        alignItems: "center",
        justifyContent: "center",
      },
    },
    size: {
      sm: { flex: 1 },
      md: { flex: 2 },
      lg: { flex: 3 },
    },
    items: {
      start: {
        alignItems: "flex-start",
      },
    },
    gap: {
      xs: {
        gap: "$1",
      },
      sm: {
        gap: "$4",
      },
      md: {
        gap: "$14",
      },
      lg: {
        gap: "$24",
      },
    },
    red: {
      true: { backgroundColor: "#f00" },
    },
    border: {
      true: {
        padding: "$2",
        border: "1px solid $red300",
        borderRadius: "0.4rem",
      },
    },
  },
});

export const FlexRow = styled("div", {
  display: "flex",
  flexDirection: "row",
  color: "$textDefault",
  gap: "$2",
  flex: 1,

  variants: {
    center: {
      true: {
        alignItems: "center",
        justifyContent: "center",
      },
    },
    items: {
      center: {
        alignItems: "center",
      },
      stretch: {
        alignItems: "stretch",
      },
    },
    justify: {
      center: {
        justifyContent: "center",
      },
      between: {
        justifyContent: "space-between",
      },
      around: {
        justifyContent: "space-around",
      },
      evenly: {
        justifyContent: "space-evenly",
      },
      end: {
        justifyContent: "flex-end",
      },
    },
    textAlign: {
      center: {
        textAlign: "center",
      },
    },
    gap: {
      sm: {
        gap: "$4",
      },
      lg: {
        gap: "$12",
      },
    },
    red: { true: { backgroundColor: "#f00" } },
  },
});

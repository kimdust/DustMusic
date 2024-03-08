import { mode } from "@chakra-ui/theme-tools";
import { lighten } from "polished";

export const variablesC = {
  $maxW: "1280px",
};

export const globalStyles = {
  colors: {
    primary: "#FC7327",
    pirmaryLight: lighten(0.1, "#FC7327"),

    bgDefault: "#F8F8F8",

    lineDefault: "#E5E7EB",

    white: "#FFF",
    black: "#000",

    gray: {
      50: "#F9FAFB",
      100: "#FAFCFE",
      200: "#E5E7EB",
      300: "#D1D5DB",
      400: "#9CA3AF",
      500: "#6B7280",
      600: "#4B5563",
      700: "#374151",
      800: "#1F2937",
      900: "#111827",
    },
  },
  styles: {
    global: (props) => ({
      body: {
        minW: "330px",
        // overflowX: 'hidden',
        fontFamily: '"Pretendard", "sans-serif" !important',
        letterSpacing: "-0.5px",
        fontSize: "16px",
        fontWeight: "400",
        lineHeight: "1.5",
        color: mode("gray.900", "white")(props),
        bg: mode("white", "navy.900")(props),
        // bg: 'url("/bg-/m.png") no-repeat 50% 0 / 420px auto',
      },
      "#root": {
        // opacity: 0.7,
      },
      input: {
        color: "gray.700",
      },
      html: {
        fontFamily: '"Pretendard", "sans-serif"',
      },
      "ul > li": {
        listStyle: "none",
      },
      ".chakra-container": {
        maxWidth: "calc(1280px + var(--chakra-space-4) * 2) !important",
      },
      ".blind": {
        position: "absolute",
        width: 0,
        height: 0,
        margin: -1,
        padding: 0,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        border: 0,
        lineHeight: 0,
      },
    }),
  },
};

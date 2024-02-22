import { mode } from "@chakra-ui/theme-tools";
export const cardStyles = {
  components: {
    Card: {
      baseStyle: {
        container: {
          // bg: mode("transparent"),
          bg: mode("transparent"),
          boxShadow: "none",
          borderRadius: "20px",
        },
      },
    },
  },
};

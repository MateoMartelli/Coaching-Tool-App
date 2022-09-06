import { extendTheme } from "@chakra-ui/react";

const globalStyle = extendTheme({
  styles: {
    global: {
      ":root": {
        "--chakra-vh": "100vh",
      },
      "html, body": {
        fontFamily:
          "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
        w: "100%",
        minH: "100vh",
      },
      "*": {
        boxSizing: "border-box",
      },
    },
  },
});

export default globalStyle;

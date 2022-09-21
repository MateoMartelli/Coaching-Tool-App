import { extendTheme } from "@chakra-ui/react";


const colors = {
  lightMode: {
    snowBG1: "#E3F0F2",
    snowBG2: "#C6E1E4",
    lightBlue1: "#A6C3DD",
    lightBlue2: "#7fa8cf",
    trueIce1: "#2C3644",
    trueIce2:  "#404D64",
    trueIce3: "#576987"
  },

  darkMode: {

  }
};

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
        h: "100vh",
      },
      "*": {
        boxSizing: "border-box",
      },
    },
    
  },
  colors
});

export default globalStyle;

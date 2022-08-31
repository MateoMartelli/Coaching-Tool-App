import { extendTheme } from "@chakra-ui/react";

const globalStyle = extendTheme({
    styles: {
        global: {
            'html, body': {
                fontFamily:
                    '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif'
            }
        }
    }
    }
);

export default globalStyle;
import "../../styles/globals.css";
import type { AppProps } from "next/app";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import globalStyle from "../utilis/globalstyles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={globalStyle}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;

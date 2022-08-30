import React, { FC /* useState */ } from "react";
import Image from "next/image";
import { Box, Flex } from "@chakra-ui/react";

const LoginLayout: FC<LoginLayoutProp> = ({ children }) => {
  return (
    <Flex
      w="100%"
      h="100vh"
      bgColor="#C6E1E4"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Flex>
  );
};

export default LoginLayout;

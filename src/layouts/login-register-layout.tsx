import React, { FC /* useState */ } from "react";
import Image from "next/image";
import { Box, Flex } from "@chakra-ui/react";

const LoginRegLayout: FC<LoginRegLayoutProp> = ({ children }) => {
  return (
    <Flex
      w="100%"
      h="100vh"
      bgColor="#E3F0F2" //"#C6E1E4"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        w="28%"
        h="70%"
        bgColor="#A6C3DD" //"#7fa8cf"
        borderStyle="solid"
        borderWidth="3px"
        borderColor="#404D64" //"#576987"//
        borderRadius="20px"
        justifyContent="center"
        alignItems="center"
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default LoginRegLayout;

import { FC /* useState */ } from "react";
import Image from "next/image";
import { Box, Flex } from "@chakra-ui/react";

const LoginRegLayout: FC<LoginRegLayoutProp> = ({ children }) => {
  return (
    <Flex
      w="100%"
      minH="100vh"
      bgColor="lightMode.snowBG1"
      justifyContent="center"
      alignItems="center"
    >
      <Flex
        // w="520px"
        // h="660px"
        h="100%"
        bgColor="lightMode.lightBlue1"
        borderStyle="solid"
        borderWidth="3px"
        borderColor="lightMode.trueIce1"
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

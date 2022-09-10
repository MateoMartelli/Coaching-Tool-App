import { FC } from "react";
import { Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import globalStyle from "../../utilis/globalstyles";

const Header: FC<Header> = () => {
  return (
    <Flex w="100%" h="7.5rem" justifyContent="center" alignItems="center">
      <Flex
        w="100%"
        h="100%"
        borderRadius="0 0 2rem 2rem"
        bgColor="lightMode.lightBlue1"
        color="white"
        justify="space-between"
        align="center"
        paddingInline="1.3rem"
      >
        <Flex cursor="pointer" opacity="0.9" _hover={{ opacity: "1" }}>
          <Image
            src="/CH_logo_Black_Frost2.png"
            height="90px"
            width="90px"
          ></Image>
        </Flex>
        <Flex>
          <Text>Coaching Helper</Text>
        </Flex>
        <Flex
          w="4.8rem"
          h="4.8rem"
          color="lightMode.snowBG1"
          bgColor="lightMode.trueIce2"
          borderRadius="50%"
          borderColor="lightMode.trueIce2"
          borderWidth="2px"
          justify="center"
          align="center"
          cursor="pointer"
          transition="all 0.29s"
          _hover={{
            color: "lightMode.trueIce2",
            bgColor: "lightMode.snowBG1",
            borderColor: "lightMode.trueIce2",
            borderWidth: "2px",
          }}
        >
          <Text fontSize="1.8rem">P</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;

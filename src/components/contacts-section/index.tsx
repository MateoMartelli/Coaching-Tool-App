import { FC } from "react";
import { Flex, Grid, Text } from "@chakra-ui/react";
import Image from "next/image";
import globalStyle from "../../utilis/globalstyles";

const ContactsSection: FC<ContactsSectionProps> = ({ isActive }) => {
  return (
    <Flex
      w="100%"
      bgColor="lightMode.lightBlue1"
      borderColor="lightMode.trueIce1"
      borderWidth="3px"
      borderRight="none"
      borderBottomLeftRadius="md"
      // p="4px"
      gap="4px"
      flexDir="column"
      align="start"
      color="lightMode.snowBG1"
      opacity={isActive ? 1 : 0}
      transition="all 0.5s"
    >
      <Flex
        w="100%"
        h="11%"
        flexDir="column"
        align="start"
        paddingInline="8px"
        color="snowBG1"
        bgColor="lightMode.trueIce1"
        // borderRadius="5px"
        borderColor="lightMode.trueIce2"
        borderWidth="2px"
        borderTop="none"
        borderLeft="none"
        borderRight="none"
        cursor="pointer"
        data-group
        transition="all 0.25s"
        _hover={{
          h: "14%",
        }}
      >
        <Text
          m="0"
          fontSize="1.2rem"
          transition="all 0.25s"
          _groupHover={{
            fontSize: "1.5rem",
          }}
        >
          Username
        </Text>
        <Text
          m="0"
          marginLeft="2px"
          fontSize="0.6rem"
          transition="all 0.25s"
          _groupHover={{
            fontSize: ".7rem",
          }}
        >
          Role or Lane
        </Text>
      </Flex>
      <Flex
        w="100%"
        h="11%"
        flexDir="column"
        align="start"
        paddingInline="8px"
        color="snowBG1"
        bgColor="lightMode.trueIce1"
        // borderRadius="5px"
        borderColor="lightMode.trueIce2"
        borderWidth="2px"
        borderTop="none"
        borderLeft="none"
        borderRight="none"
        cursor="pointer"
        data-group
        transition="all 0.25s"
        _hover={{
          h: "14%",
        }}
      >
        <Text
          m="0"
          fontSize="1.2rem"
          transition="all 0.25s"
          _groupHover={{
            fontSize: "1.5rem",
          }}
        >
          Username
        </Text>
        <Text
          m="0"
          marginLeft="2px"
          fontSize="0.6rem"
          transition="all 0.25s"
          _groupHover={{
            fontSize: ".7rem",
          }}
        >
          Role or Lane
        </Text>
      </Flex>
    </Flex>
  );
};

export default ContactsSection;

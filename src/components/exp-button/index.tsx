import { FC } from "react";
import { Flex, Grid, Text } from "@chakra-ui/react";
import Image from "next/image";
import globalStyle from "../../utilis/globalstyles";

const ExpButton: FC<ExpButtonProps> = ({ children }) => {
  return (
    <Grid
      gridTemplateColumns="48px 1fr"
      alignContent="center"
      w="45px"
      h="45px"
      // w="55px"
      // h="55px"
      cursor="pointer"
      borderRadius="100px"
      borderColor="lightMode.trueIce1"
      borderWidth="2px"
      // boxShadow=''
      bgColor="lightMode.lightBlue1"
      marginTop="15px"
      transition="all 0.6s"
      flexDir="row"
      paddingInlineEnd="auto"
      overflow="hidden"
      _hover={{
        // w: "149px",
        w: "140px",
      }}
      data-group
      paddingInline="0"
    >
      <Flex marginLeft="3px">
        <Image
          src="/CH_logo_Black_Frost2.png"
          height="35px"
          // height="45px"
          width="35px"
          // width="45px"
          layout="fixed"
          alt="logo"
        />
      </Flex>

      <Flex flexDir="column" justify="center">
        <Text
          visibility="visible"
          display="inline-block"
          color="transparent"
          fontSize="1rem"
          overflow="hidden"
          whiteSpace="nowrap"
          transition="all 0.5s"
          fontWeight="bold"
          textAlign="center"
          _groupHover={{
            visibility: "visible",
            color: "white",
          }}
        >
          {children}
        </Text>
      </Flex>
    </Grid>
  );
};

export default ExpButton;

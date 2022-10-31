import { Flex } from "@chakra-ui/react";
import { FC } from "react";
import ExpButton from "../../components/exp-button";
import Header from "../../components/header";

const HomeLayout: FC<HomeLayoutProps> = ({ children }) => {
  return (
    <Flex
      flexDir="column"
      h="100vh"
      bgColor="lightMode.snowBG1"
      // overflow="hidden"
    >
      <Header />
      <Flex h="100%">
        <Flex
          h="100%"
          color="white"
          flexDir="column"
          bgColor="lightMode.lightBlue1"
          borderRightWidth="3px"
          borderRightColor="lightMode.trueIce1"
          _before={{
            content: `""`,
            padding: 0,
            margin: 0,
            position: "relative",
            top: "-3px",
            backgroundColor: "lightMode.lightBlue1",
            height: "3px",
            width: "100%",
          }}
        >
          <Flex
            flexDir="column"
            justify="space-between"
            h="100%"
            paddingLeft="0.8rem"
            mr="1rem"
          >
            <Flex flexDir="column">
              <ExpButton>Workplace</ExpButton>
              <ExpButton>Library</ExpButton>
              <ExpButton>Meeting</ExpButton>
              <ExpButton>Data</ExpButton>
              <ExpButton>Manager</ExpButton>
            </Flex>
            <Flex pb="1rem">
              <ExpButton>Support</ExpButton>
            </Flex>
          </Flex>
        </Flex>
        {children}
      </Flex>
    </Flex>
  );
};

export default HomeLayout;

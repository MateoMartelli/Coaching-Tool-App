import type { NextPage } from "next";
import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import ExpButton from "../components/exp-button";
import HomeLayout from "../layouts/home-layout";
import ArrowButton from "../components/arrow-button";
import ContactsSection from "../components/contacts-section";
import { CalendarIcon } from "@chakra-ui/icons";
import UsersIcon from "../components/users-icon";
import Calendar from "../components/calendar";

const Home: NextPage = () => {
  const [isActiveSch, setIsActiveSch] = useState(false);

  const handleToggleSch = () => {
    setIsActiveSch((prev) => !prev);
  };

  const [isActiveCont, setIsActiveCont] = useState(false);

  const handleToggleCont = () => {
    setIsActiveCont((prev) => !prev);
  };

  return (
    <HomeLayout>
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
        <Flex
          justify="center"
          w="100%"
          h="100%"
          bgColor="Black"
          color="white"
          marginRight="4.8rem"
        >
          <Flex h="100%" w="100%" bgColor="red" marginRight="5px"></Flex>
          <Flex h="100%" w="100%" bgColor="red"></Flex>
        </Flex>

        <Flex flexDir="column" position="absolute" right="0" h="85%" w="325px">
          <Flex
            justify="flex-end"
            flexDir="row"
            h="42%"
            minH="247px"
            marginTop="1.5rem"
            overflow="hidden"
          >
            <Flex>
              <ArrowButton
                Icon={CalendarIcon}
                handleClick={handleToggleSch}
                isActive={isActiveSch}
              />
            </Flex>
            <Calendar isActive={isActiveSch} />
          </Flex>

          <Flex
            flexDir="row"
            h="100%"
            w="100%"
            marginTop="1.5rem"
            justify="flex-end"
          >
            <Flex>
              <ArrowButton
                Icon={UsersIcon}
                handleClick={handleToggleCont}
                isActive={isActiveCont}
              />
            </Flex>
            <Flex
              w={isActiveCont ? "16rem" : 0}
              borderBottomLeftRadius="md"
              transition="all 0.5s"
              overflow="hidden"
            >
              <ContactsSection isActive={isActiveCont} />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </HomeLayout>
  );
};

export default Home;

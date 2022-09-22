import type { NextPage } from "next";
import { useState } from "react";
import { Formik, Field, Form, FieldProps } from "formik";
import Image from "next/image";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import Header from "../components/header";
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
          // bgColor="black"
          color="white"
          flexDir="column"
          paddingLeft="0.8rem"
          justify="space-between"
          bgColor="lightMode.lightBlue1"
          borderRightWidth="3px"
          borderRightColor="lightMode.trueIce1"
          // borderTopWidth="3px"
          // borderTopColor="lightMode.lightBlue1"
          // transform="translate(0, -3px)"
        >
          <Flex flexDir="column" mr="1rem">
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
            h="35%"
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
            {/* <Flex
              w={isActiveSch ? "16rem" : "0"}
              // h={isActiveSch ? "100%" : "0"}
              bgColor={isActiveSch ? "lightMode.lightBlue1" : "transparent"}
              borderColor="lightMode.trueIce1"
              borderWidth={isActiveSch ? "3px" : "0"}
              p={isActiveSch ? "20px" : "0"}
              borderRight="none"
              borderBottomLeftRadius="md"
              overflow="hidden"
              transition="all 0.5s"
            > */}
            <Calendar isActive={isActiveSch} />
            {/* </Flex> */}
          </Flex>

          <Flex
            flexDir="row"
            // h="600px"
            h="65%"
            marginTop="1.5rem"
            w="100%"
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

import type { NextPage } from "next";
import { useState } from "react";
import { Formik, Field, Form, FieldProps } from "formik";
import Image from "next/image";
import { Flex, Grid, Text } from "@chakra-ui/react";
import Header from "../components/header";
import ExpButton from "../components/exp-button";
import HomeLayout from "../layouts/home-layout";
import ArrowButton from "../components/arrow-button";
import ContactsSection from "../components/contacts-section";

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
      <Flex h="100%" gap="10px">
        <Flex
          h="100%"
          // bgColor="black"
          color="white"
          flexDir="column"
          paddingLeft="2rem"
        >
          <ExpButton>Workplace</ExpButton>
          <ExpButton>Library</ExpButton>
          <ExpButton>Meeting</ExpButton>
          <ExpButton>Data</ExpButton>
          <ExpButton>Manager</ExpButton>
          <ExpButton>Support</ExpButton>
        </Flex>
        <Flex justify="center" w="100%" h="100%" bgColor="Black" color="white">
          <Flex h="100%" w="100%" bgColor="red" marginRight="5px"></Flex>
          <Flex h="100%" w="100%" bgColor="red"></Flex>
        </Flex>
        <Grid
          gridTemplateColumns="15% 85%"
          gridTemplateRows="25% 75%"
          w="20%"
          marginTop="15px"
          marginBottom="15px"
          // bgColor="lightMode.trueIce2"
          color="white"
          position="absolute"
          right="0"
          bottom="0"
          top="7.5rem"
          // gap="5px"
          // p="5px"
        >
          <Flex gridColumn="1 / 2" right="0" position="absolute">
            <ArrowButton handleClick={handleToggleSch} isActive={isActiveSch} />
          </Flex>

          <Flex
            w="100%"
            h="100%"
            bgColor="lightMode.lightBlue1"
            borderColor="lightMode.trueIce1"
            // outline="2px solid"
            // outlineColor="lightMode.trueIce1"
            // borderTopLeftRadius="6px"
            // borderBottomLeftRadius="6px"
            borderWidth="3px"
            p="20px"
            borderRight="none"
            gridColumn="2 / 3"
            gridRow="1 / 2"
          >
            Schedule
          </Flex>

          <Flex
            gridColumn="1 / 2"
            gridRow="2 / 3"
            marginTop="15px"
            position="absolute"
            right="0"
          >
            <ArrowButton
              handleClick={handleToggleCont}
              isActive={isActiveCont}
            />
          </Flex>

          <Flex
            w="100%"
            borderRadius="5px"
            gridColumn="2 / 3"
            gridRow="2 / 3"
            marginTop="15px"
          >
            <ContactsSection />
          </Flex>
        </Grid>
      </Flex>
    </HomeLayout>
  );
};

export default Home;

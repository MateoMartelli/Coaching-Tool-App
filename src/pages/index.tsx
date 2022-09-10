import type { NextPage } from "next";
import { Formik, Field, Form, FieldProps } from "formik";
import Image from "next/image";
import { Flex, Grid, Text } from "@chakra-ui/react";
import Header from "../components/header";
import ExpButton from "../components/exp-button";
import HomeLayout from "../layouts/home-layout";

const Home: NextPage = () => {
  return (
    <HomeLayout>
      <Flex h="100%" gap="10px" marginBlock="0.5rem">
        <Flex
          h="100%"
          // bgColor="black"
          color="white"
          flexDir="column"
          paddingLeft="35px"
        >
          <ExpButton>Workplace</ExpButton>
          <ExpButton>Library</ExpButton>
          <ExpButton>Meeting</ExpButton>
          <ExpButton>Data</ExpButton>
          <ExpButton>Manager</ExpButton>
          <ExpButton>Support</ExpButton>
        </Flex>
        <Flex justify="center" w="100%" h="100%" bgColor="black" color="white">
          Feed
        </Flex>
        <Flex justify="center" w="100%" h="100%" bgColor="black" color="white">
          Sched + Contacts
        </Flex>
      </Flex>
    </HomeLayout>
  );
};

export default Home;

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import LoginLayout from "../layouts/login-layout";
import { Flex } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <LoginLayout>
      <Flex
        w="40%"
        h="55%"
        bgColor="#576987"
        borderStyle="solid"
        borderWidth="1px"
        borderColor="#7fa8cf"
        justifyContent="center"
        alignItems="center"
      >
        adada
      </Flex>
    </LoginLayout>
  );
};

export default Home;

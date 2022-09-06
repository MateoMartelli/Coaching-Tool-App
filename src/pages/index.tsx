import type { NextPage } from "next";
import { Formik, Field, Form, FieldProps } from "formik";
import Image from "next/image";
import LoginRegLayout from "../layouts/login-register-layout";
import { Flex } from "@chakra-ui/react";
import Header from "../components/header";

const Home: NextPage = () => {
  return (
    <Flex>
      <Header></Header>
    </Flex>
  );
};

export default Home;

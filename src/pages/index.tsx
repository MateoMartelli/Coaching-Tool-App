import type { NextPage } from "next";
import { Formik, Field, Form, FieldProps } from "formik";
import Image from "next/image";
import LoginRegLayout from "../layouts/login-register-layout";
import {
  Flex,
  Input,
  FormControl,
  Button,
  Spinner,
  FormErrorMessage,
  Text,
  Link,
} from "@chakra-ui/react";

const initialValues = {
  email: "",
  password: "",
};

const Home: NextPage = () => {
  return <Flex>Alto Home Pa</Flex>;
};

export default Home;

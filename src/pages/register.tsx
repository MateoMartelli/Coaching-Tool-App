import { NextPage } from "next";
import { FC } from "react";
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
import { Formik, Field, Form, FieldProps } from "formik";
import LoginForm from "../components/login-form";
import LoginRegLayout from "../layouts/login-register-layouts";

const LogIn: NextPage = () => {
  return (
    <LoginRegLayout>
      <LoginForm />
    </LoginRegLayout>
  );
};

export default LogIn;

import { FC } from "react";
import { Formik, Field, Form, FieldProps } from "formik";
import Image from "next/image";
import {
  Input,
  Flex,
  FormControl,
  Button,
  Spinner,
  FormErrorMessage,
  Text,
  Link,
  FormLabel,
} from "@chakra-ui/react";
import LoginRegLayout from "../../layouts/login-register-layout";

const initialValues = {
  email: "",
  password: "",
};

const LoginForm: FC = ({}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ errors, touched }) => (
        <Form autoComplete="off">
          <Flex
            // w="385px"
            // h="530px"
            // bgColor="white"
            alignItems="center"
            paddingTop="40px"
            flexDir="column"
            gap="20px"
            p="1rem"
          >
            <Image
              src="/CH_logo_Black_Frost2.png"
              height="120px"
              width="120px"
              alt="logo"
            ></Image>
            <Text
              textAlign="center"
              fontWeight="bold"
              fontSize="2.2em"
              fontFamily="Roboto"
              marginTop="10px"
            >
              Sign in to <br /> Coaching Helper
            </Text>
            <Field name="email">
              {({ field }: FieldProps) => (
                <FormControl
                  isInvalid={"email" in errors && "email" in touched}
                >
                  <FormLabel>Email</FormLabel>
                  <Input
                    {...field}
                    borderColor="#E3F0F2"
                    w="350px"
                    type="email"
                  ></Input>
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="password">
              {({ field }: FieldProps) => (
                <FormControl
                  isInvalid={"password" in errors && "password" in touched}
                >
                  <FormLabel>Password</FormLabel>
                  <Input
                    {...field}
                    borderColor="#E3F0F2"
                    w="350px"
                    type="password"
                  ></Input>
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <FormControl
              // isInvalid={!!error}
              display="flex"
              justifyContent="center"
            >
              <Button
                bgColor="#2c3644"
                color="#E3f0f2"
                w="260px"
                borderRadius="40px"
                mb="1rem"
                type="submit"
                _hover={{
                  color: "#2c3644",
                  bgColor: "#E3F0F2",
                  opacity: "0.75",
                }}
                _active={{ opacity: "1" }}
              >
                Sign In
              </Button>
              {/* <FormErrorMessage>{error}</FormErrorMessage> */}
            </FormControl>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;

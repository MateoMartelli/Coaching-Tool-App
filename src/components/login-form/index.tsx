import { FC, useEffect, useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { Formik, Field, Form, FieldProps } from "formik";
import * as Yup from "yup";
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
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import Image from "next/image";
import LoginRegLayout from "../../layouts/login-register-layout";

const initialValues = {
  email: "",
  password: "",
};

const loginSchema = Yup.object().shape({
  email: Yup.string().required("Carga un email k-po"),
  password: Yup.string().required("Y que te pensas que va aca?"),
});

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token {
        jwt
        expiresIn
      }
      user {
        id
      }
    }
  }
`;

const LoginForm: FC = ({}) => {
  const [show, setShow] = useState(false);

  const [login, { data, loading, error }] = useMutation(LOGIN);

  const handleClick = () => setShow(!show);

  useEffect(() => {
    if (!loading) {
      if (data !== undefined) {
        console.log(data.login.token.jwt);
      } else if (error) {
        console.log(error);
      }
    }
  }, [data, loading, error]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) =>
        login({ variables: { email: values.email, password: values.password } })
      }
      validationSchema={loginSchema}
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
                    _focus={{
                      borderColor: "#2c3644",
                      shadow: "1px 0.5px 3.5px #2c3644",
                    }}
                  />
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
                  <InputGroup>
                    <Input
                      {...field}
                      borderColor="#E3F0F2"
                      w="350px"
                      type={show ? "text" : "password"}
                      _focus={{
                        borderColor: "#2c3644",
                        shadow: "1px 0.5px 3.5px #2c3644",
                      }}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? "Hide" : "Show"}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
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

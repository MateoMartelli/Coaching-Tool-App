import { FC } from "react";
import { Formik, Field, Form, FieldProps } from "formik";
import {
  Input,
  Flex,
  FormControl,
  Button,
  Spinner,
  FormErrorMessage,
  Text,
  Link,
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
          <Flex w="90%" h="90%" bgColor="white">
            <Text>Iniciar Sesión</Text>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;

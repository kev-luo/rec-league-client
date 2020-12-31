import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { Formik, Form } from "formik";

import InputField from "../components/InputField";
import { withApollo } from "../utils/withApollo";
import { LOGIN_MUTATION } from "../graphql/mutations/login";
import { toErrorMap } from "../utils/toErrorMap";

function Login() {
  const router = useRouter();
  const [login] = useMutation(LOGIN_MUTATION);
  const initialValues = { nameOrEmail: "", password: "" };

  const handleSubmit = async (values, setErrors) => {
    const response = await login({ variables: values });
    if(response.data?.login.errors) {
      setErrors(toErrorMap(response.data.login.errors));
    } else if (response.data?.login.team) {
      router.push("/");
    }
  };

  return (
    <Box w="50%" h="50%">
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { setErrors }) =>
          await handleSubmit(values, setErrors)
        }
      >
        {(props) => (
          <Form>
            <InputField name="nameOrEmail" label="Team Name/ Email" />
            <InputField name="password" label="Password" type="password" />
            <Button type="submit" isLoading={props.isSubmitting}>Login</Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default withApollo({ ssr: true })(Login);

import React from "react";
import { Input, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { Formik, Form } from "formik";

import { withApollo } from "../utils/withApollo";
import { LOGIN_MUTATION } from "../graphql/mutations/login";

function Login() {
  const router = useRouter();
  const [login] = useMutation(LOGIN_MUTATION);
  const initialValues = { nameOrEmail: "", password: "" };

  const handleSubmit = async (values, setErrors) => {
    const response = await login({ variables: values });
    if(response.data?.login.errors) {
      setErrors(toErrorMap(response.data.login.errors));
    } else if (response.data?.login.user) {
      router.push("/");
    }
  };

  return (
    <Box>
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, { setErrors }) =>
          await handleSubmit(values, setErrors)
        }
      ></Formik>
    </Box>
  );
}

export default withApollo({ ssr: true })(Login);

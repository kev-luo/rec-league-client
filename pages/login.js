import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { Formik, Form } from "formik";

import Layout from "../components/Layout";
import InputField from "../components/InputField";
import { withApollo } from "../utils/withApollo";
import { LOGIN_MUTATION } from "../graphql/mutations/login";
import { ME_QUERY } from "../graphql/queries/me";
import { toErrorMap } from "../utils/toErrorMap";

function Login() {
  const router = useRouter();
  const [login] = useMutation(LOGIN_MUTATION);
  const initialValues = { nameOrEmail: "", password: "" };

  const handleSubmit = async (values, setErrors) => {
    const response = await login({
      variables: values,
      update: (cache, { data }) => {
        cache.writeQuery({
          query: ME_QUERY,
          data: {
            __typename: "Query",
            me: data?.login.team,
          },
        });
      },
    });
    if (response.data?.login.errors) {
      setErrors(toErrorMap(response.data.login.errors));
    } else if (response.data?.login.team) {
      router.push("/");
    }
  };

  return (
    <Layout>
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
              <Button type="submit" isLoading={props.isSubmitting}>
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Layout>
  );
}

export default withApollo({ ssr: true })(Login);

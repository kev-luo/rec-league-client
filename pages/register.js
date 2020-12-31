import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { Formik, Form } from "formik";

import InputField from "../components/InputField";
import { withApollo } from "../utils/withApollo";
import { REGISTER_MUTATION } from "../graphql/mutations/register";
import { ME_QUERY } from "../graphql/queries/me";
import { toErrorMap } from "../utils/toErrorMap";

function Register() {
  const router = useRouter();
  const [register] = useMutation(REGISTER_MUTATION);
  const initialValues = {
    name: "",
    email: "",
    primaryColor: "",
    secondaryColor: "",
    password: "",
  };

  const handleSubmit = async (values, setErrors) => {
    const response = await register({
      variables: values,
      update: (cache, { data }) => {
        cache.writeQuery({
          query: ME_QUERY,
          data: {
            __typename: "Query",
            me: data?.register.team
          }
        })
      }
    })
    if(response.data?.register.errors) {
      setErrors(toErrorMap(response.data.register.errors));
    } else if (response.data?.register.team) {
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
            <InputField name="name" label="Team Name" />
            <InputField name="email" label="Captain Email" />
            <InputField name="primaryColor" label="Primary Color" />
            <InputField name="secondaryColor" label="Secondary Color" />
            <InputField name="password" label="Password" type="password" />
            <Button type="submit" isLoading={props.isSubmitting}>
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default withApollo({ ssr: true })(Register);

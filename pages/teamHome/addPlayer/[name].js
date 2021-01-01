import React from "react";
import { Box, Button, Radio } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { Formik, Form } from "formik";
import { CheckboxSingleControl } from "formik-chakra-ui"

import Layout from "../../../components/Layout";
import InputField from "../../../components/InputField";
import { withApollo } from "../../../utils/withApollo";
import { CREATE_PLAYER_MUTATION } from "../../../graphql/mutations/createPlayer";
import { toErrorMap } from "../../../utils/toErrorMap";

function AddPlayer() {
  const router = useRouter();
  console.log(router)
  const [createPlayer] = useMutation(CREATE_PLAYER_MUTATION);
  const initialValues = {
    firstName: "",
    lastName: "",
    age: "",
    captain: false
  };

  // const handleSubmit = async (values, setErrors) => {
  //   const response = await createPlayer({
  //     variables: values,
  //   });
  //   if (response.data?.createPlayer.errors) {
  //     setErrors(toErrorMap(response.data.createPlayer.errors));
  //   } else if (response.data?.createPlayer.player) {

  //   }
  // };

  const handleSubmit = async (values, setErrors) => {
    console.log(values);
  }

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
              <InputField name="firstName" label="First Name" />
              <InputField name="lastName" label="Last Name" />
              <InputField name="age" label="Age" />
              <CheckboxSingleControl name="captain">
                Captain
              </CheckboxSingleControl>
              <Button type="submit" isLoading={props.isSubmitting}>
                Register
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Layout>
  );
}

export default withApollo({ ssr: true })(AddPlayer);
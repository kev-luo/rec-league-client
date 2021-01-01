import { useMutation } from "@apollo/client";
import { Box, Button } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import InputField from "../../../components/InputField";
import Layout from "../../../components/Layout";
import { CREATE_PLAYER_MUTATION } from "../../../graphql/mutations/createPlayer";
import { toErrorMap } from "../../../utils/toErrorMap";
import { withApollo } from "../../../utils/withApollo";


function AddPlayer() {
  const router = useRouter();
  const [createPlayer] = useMutation(CREATE_PLAYER_MUTATION);
  const initialValues = {
    firstName: "",
    lastName: "",
    age: "",
    captain: false
  };

  const handleSubmit = async (values, setErrors) => {
    const response = await createPlayer({
      variables: {
        ...values,
        age: parseInt(values.age)
      },
    });
    if (response.data?.createPlayer.errors) {
      setErrors(toErrorMap(response.data.createPlayer.errors));
    } else if (response.data?.createPlayer.player) {

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
              <InputField name="firstName" label="First Name" />
              <InputField name="lastName" label="Last Name" />
              <InputField name="age" label="Age" numInput/>
              <InputField name="captain" label="Captain" isCheckBox/>
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
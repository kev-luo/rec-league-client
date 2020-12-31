import React from 'react'
import { withApollo } from '../utils/withApollo'
import { useMutation } from "@apollo/client";

import { REGISTER_MUTATION } from "../graphql/mutations/register";

function Register() {
  const [register, { loading }] = useMutation(REGISTER_MUTATION);

  return (
    <div>
      
    </div>
  )
}

export default withApollo({ ssr: true })(Register);
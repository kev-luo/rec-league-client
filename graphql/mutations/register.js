import { gql } from "@apollo/client";

export const REGISTER_MUTATION = gql`
  mutation Register($name: String!, $email: String!, $primaryColor: String!, $secondaryColor: String!, $password: String!) {
    register(input: {name: $name, email: $email, primaryColor: $primaryColor, secondaryColor: $secondaryColor, password: $password} ) {
      errors {
        field
        message
      }
      team {
        id
        name
        email
        primaryColor
        secondaryColor
      }
    }
  }
`;

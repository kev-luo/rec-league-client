import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation loginMutation($nameOrEmail: String!, $password: String!) {
    login(nameOrEmail: $nameOrEmail, password: $password) {
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

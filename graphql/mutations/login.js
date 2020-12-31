import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation loginMutation($nameOrEmail: string!, $password: string!) {
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

import { gql } from "@apollo/client";

export const ME_QUERY = gql`
  {
    me {
      id
      name
    }
  }
`;

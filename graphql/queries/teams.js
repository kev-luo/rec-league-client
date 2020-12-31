import { gql } from "@apollo/client";

export const GET_TEAMS_QUERY = gql`
  {
    teams {
      id
      name
      email
      primaryColor
      secondaryColor
    }
  }
`;

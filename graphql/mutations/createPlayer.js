import { gql } from "@apollo/client";

export const CREATE_PLAYER_MUTATION = gql`
  mutation CreatePlayer(
    $firstName: String!
    $lastName: String!
    $age: Int!
    $captain: Boolean
  ) {
    createPlayer(
      playerInput: {
        firstName: $firstName
        lastName: $lastName
        age: $age
        captain: $captain
      }
    ) {
      errors {
        field
        message
      }
      player {
        id
        firstName
        lastName
        age
        captain
        teamId
      }
    }
  }
`;

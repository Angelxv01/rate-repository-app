import { gql } from "@apollo/client";
import { REPOSITORY_INFO } from "./fragments";

export const GET_REPOSITORY_INFO = gql`
  ${REPOSITORY_INFO}
  query {
    repositories {
      edges {
        node {
          ...RepositoryInfo
        }
      }
    }
  }
`;

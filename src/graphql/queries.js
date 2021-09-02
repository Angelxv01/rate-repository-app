import { gql } from "@apollo/client";
import { REPOSITORY_INFO, REVIEWS_INFO } from "./fragments";

export const GET_REPOSITORY_INFO = gql`
  ${REPOSITORY_INFO}
  query ($order: AllRepositoriesOrderBy, $by: OrderDirection, $find: String) {
    repositories(orderBy: $order, orderDirection: $by, searchKeyword: $find) {
      edges {
        node {
          ...RepositoryInfo
        }
      }
    }
  }
`;

export const AUTHORIZED_USER = gql`
  query {
    authorizedUser {
      username
    }
  }
`;

export const REPOSITORY = gql`
  ${REPOSITORY_INFO}
  ${REVIEWS_INFO}
  query repository($id: ID!) {
    repository(id: $id) {
      ...RepositoryInfo
      url
      reviews {
        edges {
          node {
            ...ReviewsInfo
          }
        }
      }
    }
  }
`;

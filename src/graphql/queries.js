import { gql } from "@apollo/client";
import { REPOSITORY_INFO, REVIEWS_INFO } from "./fragments";

export const GET_REPOSITORY_INFO = gql`
  ${REPOSITORY_INFO}
  query getRepositoryInfo(
    $order: AllRepositoriesOrderBy
    $by: OrderDirection
    $find: String
    $first: Int
    $after: String
  ) {
    repositories(
      orderBy: $order
      orderDirection: $by
      searchKeyword: $find
      first: $first
      after: $after
    ) {
      edges {
        node {
          ...RepositoryInfo
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

export const AUTHORIZED_USER = gql`
  ${REVIEWS_INFO}
  query authorizedUser(
    $first: Int
    $after: String
    $showReviews: Boolean = false
  ) {
    authorizedUser {
      username
      reviews(first: $first, after: $after) @include(if: $showReviews) {
        edges {
          node {
            ...ReviewsInfo
            repository {
              id
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;

export const REPOSITORY = gql`
  ${REPOSITORY_INFO}
  ${REVIEWS_INFO}
  query repository($id: ID!, $first: Int, $after: String) {
    repository(id: $id) {
      ...RepositoryInfo
      url
      reviews(first: $first, after: $after) {
        edges {
          node {
            ...ReviewsInfo
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;

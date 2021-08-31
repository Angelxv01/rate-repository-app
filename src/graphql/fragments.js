import { gql } from "@apollo/client";

export const REPOSITORY_INFO = gql`
  fragment RepositoryInfo on Repository {
    id
    fullName
    description
    language
    forksCount
    stargazersCount
    ratingAverage
    reviewCount
    ownerAvatarUrl
  }
`;

export const REVIEWS_INFO = gql`
  fragment ReviewsInfo on Review {
    id
    text
    rating
    createdAt
    user {
      id
      username
    }
  }
`;

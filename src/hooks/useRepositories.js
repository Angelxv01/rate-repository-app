import { useQuery } from "@apollo/client";
import { GET_REPOSITORY_INFO } from "../graphql/queries";

const useRepositories = (variables) => {
  const { data, loading, fetchMore, ...rest } = useQuery(GET_REPOSITORY_INFO, {
    fetchPolicy: "cache-and-network",
    variables
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables
      }
    });
  };

  return {
    repositories: data?.repositories,
    fetchMore: handleFetchMore,
    loading,
    ...rest
  };
};

export default useRepositories;

import { useQuery } from "@apollo/client";
import { GET_REPOSITORY_INFO } from "../graphql/queries";

const useRepository = (variables) => {
  const { data, ...rest } = useQuery(GET_REPOSITORY_INFO, {
    fetchPolicy: "cache-and-network",
    variables
  });

  return { repositories: data?.repositories, ...rest };
};

export default useRepository;

import { useQuery } from "@apollo/client";
import { GET_REPOSITORY_INFO } from "../graphql/queries";

const useRepository = () => {
  const { data, ...rest } = useQuery(GET_REPOSITORY_INFO, {
    fetchPolicy: "cache-and-network"
  });

  return { repositories: data?.repositories, ...rest };
};

export default useRepository;

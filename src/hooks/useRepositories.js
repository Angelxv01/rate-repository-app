import { useLazyQuery } from "@apollo/client";
import { GET_REPOSITORY_INFO } from "../graphql/queries";

const useRepository = () => {
  const [getData, lazyData] = useLazyQuery(GET_REPOSITORY_INFO, {
    fetchPolicy: "cache-and-network"
  });

  return { lazyData, getData };
};

export default useRepository;

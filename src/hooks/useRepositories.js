import { useLazyQuery, useQuery } from "@apollo/client";
import { GET_REPOSITORY_INFO } from "../graphql/queries";

const useRepository = () => {
  const { data, ...rest } = useQuery(GET_REPOSITORY_INFO, {
    fetchPolicy: "cache-and-network"
  });

  const [getData, lazyData] = useLazyQuery(GET_REPOSITORY_INFO, {
    fetchPolicy: "cache-and-network"
  });

  return { lazyData, getData, ...rest };
};

export default useRepository;

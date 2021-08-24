import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORY_INFO } from "../graphql/queries";

const useRepository = () => {
  const response = useQuery(GET_REPOSITORY_INFO);
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (response.data) {
      setLoading(false);
      setRepositories(response.data.repositories);
    }
  }, [response.data]);

  if (loading || response.loading || !repositories) {
    return [];
  }

  return { repositories };
};

export default useRepository;

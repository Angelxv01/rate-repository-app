import { useLazyQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";

import RepositoryItem from "./RepositoryList/RepositoryItem";
import { REPOSITORY } from "../graphql/queries";
import { useParams } from "react-router-native";

const RepositoryView = () => {
  const [query, result] = useLazyQuery(REPOSITORY, {
    fetchPolicy: "cache-and-network"
  });
  const [repository, setRepository] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    query({ variables: { id } });

    if (result.data) {
      setRepository(result.data.repository);
    }
  }, [result.data]);

  if (!repository) {
    return null;
  }
  return <RepositoryItem item={repository} detail />;
};

export default RepositoryView;

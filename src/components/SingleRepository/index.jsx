import { useLazyQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";

import RepositoryItem from "../RepositoryList/RepositoryItem";
import ReviewItem from "./ReviewItem";
import { REPOSITORY } from "../../graphql/queries";
import { FlatList, StyleSheet, View } from "react-native";
import { useParams } from "react-router-native";

const ItemSeparator = () => <View style={styles.separator} />;

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

  const reviews = repository.reviews.edges.map((obj) => obj.node);

  return (
    <FlatList
      data={reviews}
      ListHeaderComponent={() => <RepositoryItem item={repository} detail />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
    />
  );
};

export default RepositoryView;

const styles = StyleSheet.create({
  separator: {
    height: 10
  }
});

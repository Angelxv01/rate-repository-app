import React from "react";

import RepositoryItem from "../RepositoryList/RepositoryItem";
import ReviewItem from "./ReviewItem";
import { FlatList, StyleSheet, View } from "react-native";
import { useParams } from "react-router-native";
import useRepository from "../../hooks/useRepository";

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryView = () => {
  const { id } = useParams();
  const { repository, fetchMore } = useRepository({
    id,
    first: 3
  });

  if (!repository) {
    return null;
  }

  const reviews = repository
    ? repository.reviews.edges.map((obj) => obj.node)
    : [];

  return (
    <FlatList
      data={reviews}
      ListHeaderComponent={() => <RepositoryItem item={repository} detail />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <ReviewItem review={item} />}
      onEndReached={() => fetchMore()}
      onEndReachedThreshold={0.5}
    />
  );
};

export default RepositoryView;

const styles = StyleSheet.create({
  separator: {
    height: 10
  }
});

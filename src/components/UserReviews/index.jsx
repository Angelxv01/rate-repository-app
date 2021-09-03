import { useQuery } from "@apollo/client";
import React from "react";
import { View, FlatList } from "react-native";
import { AUTHORIZED_USER } from "../../graphql/queries";

import ReviewItem from "../SingleRepository/ReviewItem";

const render = ({ item }) => <ReviewItem review={item} />;
const itemSeparator = () => <View style={{ height: 10 }} />;

const index = () => {
  const variables = { first: 3, showReviews: true };
  const { data, loading, fetchMore } = useQuery(AUTHORIZED_USER, {
    fetchPolicy: "cache-and-network",
    variables
  });

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.authorizedUser.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.authorizedUser.reviews.pageInfo.endCursor,
        ...variables
      }
    });
  };

  const reviews = data?.authorizedUser
    ? data?.authorizedUser.reviews.edges.map((obj) => obj.node)
    : [];

  return (
    <FlatList
      style={{ padding: 5 }}
      data={reviews}
      renderItem={render}
      ItemSeparatorComponent={itemSeparator}
      onEndReached={handleFetchMore}
      onEndReachedThreshold={0.5}
      keyExtractor={(obj) => obj.id}
    />
  );
};

export default index;

import { useMutation, useQuery } from "@apollo/client";
import React from "react";
import { View, FlatList, Pressable, Alert } from "react-native";
import { useHistory } from "react-router-native";
import { DELETE_REVIEW } from "../../graphql/mutations";

import { AUTHORIZED_USER } from "../../graphql/queries";
import theme from "../../theme";
import ReviewItem from "../SingleRepository/ReviewItem";
import Text from "../styledComponents/Text";

const itemSeparator = () => <View style={{ height: 10 }} />;

const index = () => {
  const history = useHistory();
  const [mutate] = useMutation(DELETE_REVIEW, {
    refetchQueries: [{ query: AUTHORIZED_USER }],
    onError: (err) => console.log(err.graphQLErrors[0].message)
  });

  const createAlert = (id) =>
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "Delete", onPress: () => mutate({ variables: { id } }) }
      ]
    );
  const render = ({ item }) => (
    <View>
      <ReviewItem review={item} />
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          backgroundColor: "white",
          justifyContent: "flex-end",
          paddingBottom: 20
        }}
      >
        <Pressable
          style={{
            marginRight: 10,
            backgroundColor: theme.colors.primary,
            padding: 10
          }}
          onPress={() => history.push(`/repository/${item.repository.id}`)}
        >
          <Text type="strong" color="white">
            View Repository
          </Text>
        </Pressable>
        <Pressable
          style={{
            marginRight: 10,
            backgroundColor: theme.colors.error,
            padding: 10
          }}
          onPress={() => createAlert(item.id)}
        >
          <Text type="strong" color="white">
            Delete review
          </Text>
        </Pressable>
      </View>
    </View>
  );

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
    />
  );
};

export default index;

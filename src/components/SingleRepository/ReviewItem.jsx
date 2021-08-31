import React from "react";
import { StyleSheet, View } from "react-native";

import Text from "../styledComponents/Text";
import theme from "../../theme";

const ReviewItem = ({ review }) => {
  const date = new Date(review.createdAt)
    .toLocaleDateString("it-IT", {
      dateStyle: "short"
    })
    .replace(/\//g, ".");
  return (
    <View style={styles.row}>
      <View style={styles.rating}>
        <Text color="primary" type="strong">
          {review.rating}
        </Text>
      </View>
      <View style={styles.description}>
        <Text type="h3">{review.user.username}</Text>
        <Text type="light">{date}</Text>
        <Text>{review.text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    backgroundColor: theme.colors.white,
    padding: 15
  },
  rating: {
    borderRadius: 25,
    height: 50,
    width: 50,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    textAlign: "center",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  description: {
    flexShrink: 1
  }
});

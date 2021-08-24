import React from "react";
import { View, Image, StyleSheet } from "react-native";
import theme from "../../theme";
import Text from "../styledComponents/Text";

const RespositoryItem = ({ item }) => {
  const flatNumber = (number) => {
    return number > 1000
      ? (number / 1000).toFixed(1).replace(/\.0$/, "") + "k"
      : number;
  };

  return (
    <View style={styles.container}>
      <View style={[styles.row]}>
        <Image style={[styles.img]} source={{ uri: item.ownerAvatarUrl }} />
        <View
          style={[
            styles.column,
            styles.flexStart,
            { flexGrow: 1, marginLeft: 10 }
          ]}
        >
          <Text type="primary">{item.fullName}</Text>
          <Text type="secondary">{item.description}</Text>
        </View>
      </View>
      <View style={styles.buttonLike}>
        <Text style={styles.whiteText}>{item.language}</Text>
      </View>
      <View style={styles.display}>
        <View style={styles.column}>
          <Text type="primary">{flatNumber(item.stargazersCount)}</Text>
          <Text type="secondary">Stars</Text>
        </View>
        <View style={styles.column}>
          <Text type="primary">{flatNumber(item.forksCount)}</Text>
          <Text type="secondary">Forks</Text>
        </View>
        <View style={styles.column}>
          <Text type="primary">{flatNumber(item.reviewCount)}</Text>
          <Text type="secondary">Reviews</Text>
        </View>
        <View style={styles.column}>
          <Text type="primary">{flatNumber(item.ratingAverage)}</Text>
          <Text type="secondary">Rating</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10
  },
  img: {
    height: 50,
    width: 50
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  column: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  flexStart: {
    alignItems: "flex-start"
  },
  justifyContent: {
    justifyContent: "space-between"
  },
  buttonLike: {
    alignSelf: "flex-start",
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    padding: 8,
    marginVertical: 5
  },
  whiteText: {
    color: theme.colors.white,
    fontWeight: "bold"
  },
  display: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  }
});

export default RespositoryItem;

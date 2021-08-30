import React from "react";
import { View, Image, StyleSheet } from "react-native";
import theme from "../../theme";
import Text from "../styledComponents/Text";

const RespositoryItem = ({ item, detail }) => {
  const flatNumber = (number) => {
    return number > 1000
      ? (number / 1000).toFixed(1).replace(/\.0$/, "") + "k"
      : number;
  };

  return (
    // <View style={styles.container}>
    //   <View style={styles.row}>
    //     <Image style={styles.img} source={{ uri: item.ownerAvatarUrl }} />
    //     <View style={[styles.column, styles.flexStart, styles.info]}>
    //       <Text type="primary" testID={item.id}>
    //         {item.fullName}
    //       </Text>
    //       <Text type="secondary" testID={item.id}>
    //         {item.description}
    //       </Text>
    //     </View>
    //   </View>
    //   <View style={styles.buttonLike}>
    //     <Text testID={item.id} style={styles.whiteText}>
    //       {item.language}
    //     </Text>
    //   </View>
    //   <View style={styles.display}>
    //     <View style={styles.column}>
    //       <Text type="primary" testID={item.id}>
    //         {flatNumber(item.stargazersCount)}
    //       </Text>
    //       <Text type="secondary">Stars</Text>
    //     </View>
    //     <View style={styles.column}>
    //       <Text type="primary" testID={item.id}>
    //         {flatNumber(item.forksCount)}
    //       </Text>
    //       <Text type="secondary">Forks</Text>
    //     </View>
    //     <View style={styles.column}>
    //       <Text type="primary" testID={item.id}>
    //         {flatNumber(item.reviewCount)}
    //       </Text>
    //       <Text type="secondary">Reviews</Text>
    //     </View>
    //     <View style={styles.column}>
    //       <Text type="primary" testID={item.id}>
    //         {flatNumber(item.ratingAverage)}
    //       </Text>
    //       <Text type="secondary">Rating</Text>
    //     </View>
    //   </View>
    //   <Pressable style={styles.buttonLike}>
    //     <Text fontSize="subheading" fontWeight="bold">
    //       Open in GitHub
    //     </Text>
    //   </Pressable>
    // </View>

    <View style={styles.container}>
      <View style={[styles.row, styles.presentation]}>
        <Image style={styles.image} source={{ uri: item.ownerAvatarUrl }} />
        <View style={styles.description}>
          <Text testID={item.id} type="h3">
            {item.fullName}
          </Text>
          <Text style={styles.description} testID={item.id} type="light">
            {item.description}
          </Text>
        </View>
      </View>
      <Text style={styles.callAction} color="white" testID={item.id}>
        {item.language}
      </Text>

      <View style={[styles.row, styles.evenSpaced, styles.my10]}>
        <View style={styles.center}>
          <Text testID={item.id} type="h3">
            {flatNumber(item.stargazersCount)}
          </Text>
          <Text type="light">Stars</Text>
        </View>
        <View style={styles.center}>
          <Text testID={item.id} type="h3">
            {flatNumber(item.forksCount)}
          </Text>
          <Text type="light">Forks</Text>
        </View>
        <View style={styles.center}>
          <Text testID={item.id} type="h3">
            {flatNumber(item.reviewCount)}
          </Text>
          <Text type="light">Reviews</Text>
        </View>
        <View style={styles.center}>
          <Text testID={item.id} type="h3">
            {flatNumber(item.ratingAverage)}
          </Text>
          <Text type="light">Rating</Text>
        </View>
      </View>
      {detail && (
        <Text type="strong" style={styles.button}>
          See on GitHub
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: 10
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  row: {
    flexDirection: "row"
  },
  center: {
    alignItems: "center"
  },
  evenSpaced: {
    justifyContent: "space-evenly"
  },
  my10: {
    marginVertical: 10
  },
  presentation: {
    marginVertical: 10
  },
  description: {
    flexShrink: 1
  },
  callAction: {
    alignSelf: "flex-start",
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    padding: 8,
    marginVertical: 5
  },
  button: {
    textAlign: "center",
    borderColor: theme.colors.primary,
    borderRadius: 8,
    borderWidth: 2,
    paddingVertical: 5,
    color: theme.colors.primary,
    marginVertical: 5
  }

  // container: {
  //   backgroundColor: "white",
  //   padding: 10
  // },
  // img: {
  //   height: 50,
  //   width: 50
  // },
  // row: {
  //   flexDirection: "row",
  //   justifyContent: "space-between"
  // },
  // column: {
  //   flexDirection: "column",
  //   justifyContent: "center",
  //   alignItems: "center"
  // },
  // flexStart: {
  //   alignItems: "flex-start"
  // },
  // justifyContent: {
  //   justifyContent: "space-between"
  // },
  // buttonLike: {
  //   alignSelf: "flex-start",
  //   backgroundColor: theme.colors.primary,
  //   borderRadius: 8,
  //   padding: 8,
  //   marginVertical: 5
  // },
  // whiteText: {
  //   color: theme.colors.white,
  //   fontWeight: "bold"
  // },
  // display: {
  //   flexDirection: "row",
  //   justifyContent: "space-evenly"
  // },
  // info: {
  //   marginHorizontal: 10,
  //   flex: 1
  // }
});

export default RespositoryItem;

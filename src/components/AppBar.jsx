import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

import theme from "../theme";

import AppBarTab from "./AppBarTab";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.dark,
    paddingHorizontal: 10
  }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab text="Repositories" />
      <AppBarTab text="Hello, this is Itho" />
    </View>
  );
};

export default AppBar;

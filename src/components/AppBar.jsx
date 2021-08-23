import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
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
      <ScrollView horizontal>
        <AppBarTab text="Repositories" path="/" />
        <AppBarTab text="Sign in" path="/signin" />
      </ScrollView>
    </View>
  );
};

export default AppBar;

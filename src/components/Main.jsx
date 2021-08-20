import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import RepositoryList from "../RepositoryList/RepositoryList";
import Constants from "expo-constants";

const Main = () => {
  return (
    <View style={styles.container}>
      <Text>Hello everybody, this is Itho</Text>
      <StatusBar style="auto" />
      <RepositoryList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    padding: 10,
    flex: 1,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Main;

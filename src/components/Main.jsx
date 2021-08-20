import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import RepositoryList from "./RepositoryList";
import AppBar from "./AppBar";

const Main = () => {
  return (
    <View>
      <AppBar />
      <StatusBar />
      <RepositoryList />
    </View>
  );
};

export default Main;

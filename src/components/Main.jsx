import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import { Route, Switch, Redirect } from "react-router-native";

import RepositoryList from "./RepositoryList";
import SignIn from "./SignIn";
import AppBar from "./AppBar";

const Main = () => {
  return (
    <View>
      <AppBar />
      <StatusBar />
      <Switch>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;

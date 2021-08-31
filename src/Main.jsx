import React from "react";
import { View, StyleSheet } from "react-native";
import { Route, Switch, Redirect } from "react-router-native";

import RepositoryList from "./components/RepositoryList";
import SingleRepository from "./components/SingleRepository";
import SignIn from "./components/SignIn";
import AppBar from "./components/AppBar";
import theme from "./theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.lightGray,
    flexGrow: 1,
    flexShrink: 1
  }
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        <Route path="/repository/:id" exact>
          <SingleRepository />
        </Route>
        <Redirect to="/" />
      </Switch>
    </View>
  );
};

export default Main;

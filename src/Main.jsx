import React from "react";
import { View, StyleSheet } from "react-native";
import { Route, Switch, Redirect } from "react-router-native";

import RepositoryList from "./components/RepositoryList";
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
    <View>
      <AppBar />
      <View style={styles.container}>
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
    </View>
  );
};

export default Main;
import React from "react";
import { View, StyleSheet } from "react-native";
import { Route, Switch, Redirect } from "react-router-native";

import RepositoryList from "./components/RepositoryList";
import SingleRepository from "./components/SingleRepository";
import SignIn from "./components/SignIn";
import AppBar from "./components/AppBar";
import Review from "./components/Review";
import SignUp from "./components/SignUp";
import UserReviews from "./components/UserReviews";
import theme from "./theme";

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Switch>
        <Route path="/review">
          <Review />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/repository/:id" exact>
          <SingleRepository />
        </Route>
        <Route path="/myReviews">
          <UserReviews />
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.lightGray,
    flexGrow: 1,
    flexShrink: 1
  }
});

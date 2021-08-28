import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";

import theme from "../../theme";
import AppBarLink from "./AppBarLink";
import AppBarAction from "./AppBarAction";
import { useApolloClient, useQuery } from "@apollo/client";
import { AUTHORIZED_USER } from "../../graphql/queries";
import useAuthStorage from "../../hooks/useAuthStorage";
import { useHistory } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.dark,
    paddingHorizontal: 10
  },
  text: {
    textAlign: "center",
    padding: 10
  }
});

const AppBar = () => {
  const response = useQuery(AUTHORIZED_USER);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const history = useHistory();

  const logout = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    history.push("/signin");
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarLink text="Repositories" path="/" />
        {response.data?.authorizedUser?.username ? (
          <>
            <AppBarLink text={response.data?.authorizedUser?.username} />
            <AppBarAction text="Log out" onPress={logout} />
          </>
        ) : (
          <AppBarLink text="Sign in" path="/signin" />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;

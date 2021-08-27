import React from "react";
import { View, StyleSheet, ScrollView, Pressable } from "react-native";
import Constants from "expo-constants";

import theme from "../../theme";
import Text from "../styledComponents/Text";
import AppBarTab from "./AppBarTab";
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
    padding: 10,
    color: theme.colors.white
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

  if (response.loading) {
    return null;
  }

  const logged = response.data.authorizedUser;

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text="Repositories" path="/" />
        {logged ? (
          <Pressable onPress={logout}>
            <Text style={styles.text} type="primary">
              Log out
            </Text>
          </Pressable>
        ) : (
          <AppBarTab text="Sign in" path="/signin" />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;

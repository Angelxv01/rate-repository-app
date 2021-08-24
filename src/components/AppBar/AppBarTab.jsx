import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Link } from "react-router-native";

import theme from "../../theme";
import Text from "../styledComponents/Text";

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: theme.colors.white
  }
});

const AppBarTab = ({ text, path }) => {
  return (
    <Pressable>
      <Link to={path}>
        <Text style={styles.text} type="primary">
          {text}
        </Text>
      </Link>
    </Pressable>
  );
};

export default AppBarTab;

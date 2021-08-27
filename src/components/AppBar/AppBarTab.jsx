import React from "react";
import { StyleSheet } from "react-native";
import { Link } from "react-router-native";

import theme from "../../theme";
import Text from "../styledComponents/Text";

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    padding: 10,
    color: theme.colors.white
  }
});

const AppBarTab = ({ text, path }) => {
  return (
    <Link to={path}>
      <Text style={styles.text} type="primary">
        {text}
      </Text>
    </Link>
  );
};

export default AppBarTab;

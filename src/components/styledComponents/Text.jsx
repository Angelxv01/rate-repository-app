import React from "react";
import { Text as NativeText, StyleSheet } from "react-native";
import theme from "../../theme";
const styles = StyleSheet.create({
  primaryText: {
    color: theme.colors.black,
    fontWeight: "bold",
    fontSize: 16
  },
  secondaryText: {
    color: theme.colors.gray,
    fontSize: 14
  }
});

const Text = ({ type, ...props }) => {
  const style = [
    type === "primary" && styles.primaryText,
    type === "secondary" && styles.secondaryText
  ];
  return <NativeText style={style} {...props} />;
};

export default Text;

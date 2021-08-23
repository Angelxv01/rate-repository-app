import React from "react";
import { Text as NativeText, StyleSheet, Platform } from "react-native";
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
  },
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: Platform.select({
      android: theme.fonts.android,
      ios: theme.fonts.ios,
      default: theme.fonts.main
    }),
    fontWeight: theme.fontWeights.normal
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary
  },
  colorPrimary: {
    color: theme.colors.primary
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold
  }
});

const Text = ({ type, style, color, fontWeight, fontSize, ...props }) => {
  const textStyles = [
    styles.text,
    type === "primary" && styles.primaryText,
    type === "secondary" && styles.secondaryText,
    color === "textSecondary" && styles.colorTextSecondary,
    color === "primary" && styles.colorPrimary,
    fontSize === "subheading" && styles.fontSizeSubheading,
    fontWeight === "bold" && styles.fontWeightBold,
    style
  ];
  return <NativeText style={textStyles} {...props} />;
};

export default Text;

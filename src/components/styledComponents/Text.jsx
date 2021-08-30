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
  colorWhite: {
    color: theme.colors.white
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold
  },
  h3: {
    fontWeight: "bold",
    fontSize: theme.fontSizes.h3,
    marginBottom: 5
  },
  light: {
    color: theme.colors.gray
  },
  strong: {
    fontWeight: "bold"
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

    // actually organized

    // type h1...h3, strong, italic, underlined, etc...
    type === "strong" && styles.strong,
    type === "h3" && styles.h3,
    type === "light" && styles.light,
    color === "white" && styles.colorWhite,
    style
  ];
  return <NativeText style={textStyles} {...props} />;
};

export default Text;

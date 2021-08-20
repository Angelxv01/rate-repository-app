import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontWeight: "bold",
    paddingVertical: 10,
    marginRight: 15,
    fontSize: 18
  }
});

const AppBarTab = ({ text }) => {
  return (
    <Pressable>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default AppBarTab;

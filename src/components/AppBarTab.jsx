import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontWeight: "bold",
    paddingVertical: 10,
    marginRight: 15,
    fontSize: 18
  }
});

const AppBarTab = ({ text, path }) => {
  return (
    <Pressable>
      <Link to={path}>
        <Text style={styles.text}>{text}</Text>
      </Link>
    </Pressable>
  );
};

export default AppBarTab;

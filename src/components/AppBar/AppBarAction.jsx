import React from "react";
import { Pressable, StyleSheet } from "react-native";

import Text from "../styledComponents/Text";

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    padding: 10
  }
});

const AppBarAction = ({ text, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <Text style={styles.text} type="primary" color="white">
        {text}
      </Text>
    </Pressable>
  );
};

export default AppBarAction;

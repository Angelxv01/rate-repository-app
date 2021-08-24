import React from "react";
import { View, Pressable, StyleSheet } from "react-native";

import theme from "../../theme";
import Text from "../styledComponents/Text";
import FormikTextInput from "./FormikTextInput";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 5
  },
  button: {
    marginVertical: 5,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    borderRadius: 4,
    padding: 4
  },
  text: {
    textAlign: "center",
    color: theme.colors.primary
  },
  input: {
    marginVertical: 5,
    padding: 5,
    fontSize: 16,
    borderWidth: 1,
    borderColor: theme.colors.gray,
    borderRadius: 4
  }
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name="username"
        placeholder="Username"
        style={styles.input}
      />
      <FormikTextInput
        name="password"
        placeholder="Password"
        secureTextEntry
        style={styles.input}
      />
      <Pressable onPress={onSubmit} style={styles.button}>
        <Text fontSize="subheading" fontWeight="bold" style={styles.text}>
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

export default SignInForm;

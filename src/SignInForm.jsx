import React from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";
import FormikTextInput from "./components/FormikTextInput";
import theme from "./theme";

const styles = StyleSheet.create({
  button: {
    margin: 5,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    borderRadius: 4,
    padding: 4
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold"
  },
  input: {
    margin: 5,
    padding: 5,
    fontSize: 16,
    borderWidth: 1,
    borderColor: theme.colors.gray,
    borderRadius: 4
  }
});

const SignInForm = ({ onSubmit }) => {
  return (
    <View>
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
        <Text style={styles.text}>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default SignInForm;

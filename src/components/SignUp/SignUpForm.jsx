import React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import Text from "../styledComponents/Text";
import FormikTextInput from "../SignIn/FormikTextInput";
import theme from "../../theme";

const SignUpForm = ({ onSubmit }) => {
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
        style={styles.input}
        secureTextEntry
      />
      <FormikTextInput
        name="passwordConfirmation"
        placeholder="Password Confirmation"
        style={styles.input}
        secureTextEntry
      />

      <Pressable onPress={onSubmit} style={styles.button} testID="submit">
        <Text type="h3" color="primary" style={styles.text}>
          Sign in
        </Text>
      </Pressable>
    </View>
  );
};

export default SignUpForm;

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

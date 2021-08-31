import React from "react";
import { StyleSheet, View, Pressable } from "react-native";

import Text from "../styledComponents/Text";
import theme from "../../theme";
import FormikTextInput from "../SignIn/FormikTextInput";

const ReviewForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        name="ownerName"
        placeholder="Repository Owner Name"
        style={styles.input}
      />
      <FormikTextInput
        name="repositoryName"
        placeholder="Repository Name"
        style={styles.input}
      />
      <FormikTextInput
        name="rating"
        placeholder="Rating between 0 and 100"
        style={styles.input}
      />
      <FormikTextInput
        name="text"
        placeholder="Review"
        style={styles.input}
        multiline
      />

      <Pressable onPress={onSubmit} style={styles.button}>
        <Text type="h3" style={styles.text} color="primary">
          Post Review
        </Text>
      </Pressable>
    </View>
  );
};

export default ReviewForm;

const styles = StyleSheet.create({
  input: {
    marginVertical: 5,
    padding: 5,
    fontSize: 16,
    borderWidth: 1,
    borderColor: theme.colors.gray,
    borderRadius: 4
  },
  button: {
    marginVertical: 5,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    borderRadius: 4,
    padding: 4
  },
  text: {
    textAlign: "center"
  },
  container: {
    backgroundColor: theme.colors.white,
    padding: 10
  }
});

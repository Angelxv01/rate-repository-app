import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import { Formik } from "formik";
import SignInForm from "../../components/SignIn/SignInForm";
// ...

const SignInContainer = ({ onSubmit }) => {
  return (
    <Formik initialValues={{ username: "", password: "" }} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

describe("SignIn", () => {
  describe("SignInContainer", () => {
    it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button
      const onSubmit = jest.fn();
      const { getByTestId } = render(<SignInContainer onSubmit={onSubmit} />);
      fireEvent.changeText(getByTestId("username"), "kalle");
      fireEvent.changeText(getByTestId("password"), "password");
      fireEvent.press(getByTestId("submit"));

      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: "kalle",
          password: "password"
        });
      });
    });
  });
});

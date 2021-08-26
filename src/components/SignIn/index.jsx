import React from "react";
import { Formik } from "formik";
import * as yup from "yup";

import SignInForm from "./SignInForm";
import useSignIn from "../../hooks/useSignIn";

const initialValues = {
  username: "",
  password: ""
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username should be longer than 3 chars")
    .required("Username is required"),
  password: yup
    .string()
    .min(8, "Password should be long at least 8")
    .required("Password is required")
});

const SignIn = () => {
  const [signIn] = useSignIn();
  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn(username, password);
      console.log(data.authorize.accessToken);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;

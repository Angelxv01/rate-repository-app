import { useMutation } from "@apollo/client";
import { Formik } from "formik";
import React from "react";
import * as yup from "yup";

import { CREATE_USER } from "../../graphql/mutations";
import SignUpForm from "./SignUpForm";
import useSignIn from "../../hooks/useSignIn";
import { useHistory } from "react-router";

const initialValues = {
  username: "",
  password: "",
  passwordConfirmation: ""
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username should be longer than 3")
    .max(30, "Username should be shorter than 30")
    .required("Username is required"),
  password: yup
    .string()
    .min(8, "Password should be longer than 8")
    .max(50, "Password should be shorter than 50")
    .required("Password is required"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Check your password")
    .required("Please confirm the password")
});

const index = () => {
  const [mutate] = useMutation(CREATE_USER, {
    fetchPolicy: "no-cache"
  });
  const history = useHistory();
  const [signIn] = useSignIn();
  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await mutate({ variables: { username, password } });
      await signIn(username, password);
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default index;

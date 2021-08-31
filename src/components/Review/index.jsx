import React from "react";
import { StyleSheet } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

import ReviewForm from "./ReviewForm";
import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../../graphql/mutations";
import { useHistory } from "react-router-native";

const initialValues = {
  ownerName: "",
  repositoryName: "",
  rating: "",
  text: ""
};

const validationSchema = yup.object().shape({
  ownerName: yup.string().required("Repository owner's name is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup
    .number()
    .required("Review must be a number between 1 and 100")
    .min(1, "Rating must be equal or greater than 1")
    .max(100, "Rating must be equal or less than 100"),
  text: yup.string().notRequired()
});

const index = () => {
  const [mutate, response] = useMutation(CREATE_REVIEW);
  const history = useHistory();

  const onSubmit = async (values) => {
    try {
      await mutate({ variables: { ...values, rating: Number(values.rating) } });
    } catch (err) {
      return history.push("/");
    }
    return history.push(
      `/repository/${values.ownerName}.${values.repositoryName}`
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default index;

const styles = StyleSheet.create({});

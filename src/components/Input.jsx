import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const ConvertSchema = Yup.object().shape({
  query: Yup.string().matches(
    `^(M{0,3})(D?C{0,3}|C[DM])(L?X{0,3}|X[LC])(V?I{0,3}|I[VX])$`,
    `The numeral you entered is not a Roman numeral.`
  ),
});

function Input({ initialValue, onSubmit }) {
  return (
    <div>
      <h3>Enter any Roman numeral (e.g. VII)</h3>
      <Formik
        initialValues={{ query: initialValue.toUpperCase() }}
        onSubmit={onSubmit}
        validationSchema={ConvertSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <Field type="text" autoComplete="off" autoFocus name="query" />
            {errors.query && touched.query ? (
              <div>{errors.query}</div>
            ) : (
              <button type="submit">Convert</button>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default Input;

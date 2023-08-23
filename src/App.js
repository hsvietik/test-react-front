import "./App.css";
import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { Routes, Route, useSearchParams } from "react-router-dom";
import { convertRoman } from "./api";

function App() {
  const [arabInt, setArabInt] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(arabInt);
  const query = searchParams.get("query") ?? "";
  const onQueryChange = ({ query }) => {
    console.log(query);
    query
      ? setSearchParams({ query: query.toLowerCase() })
      : setSearchParams({});
  };
  useEffect(() => {
    console.log(query);

    if (query === "") return;
    async function convertRomanToArab() {
      try {
        const response = await convertRoman(query);
        console.log(response);
        setArabInt(response.results);
      } catch (error) {
        console.log(error);
      }
    }
    convertRomanToArab();
  }, [query, setSearchParams]);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ConvertInput
            initialValue={query}
            onSubmit={(query) => onQueryChange(query)}
          />
        }
      />
    </Routes>
  );
}

export default App;

function ConvertInput({ initialValue, onSubmit }) {
  return (
    <div>
      <Formik initialValues={{ query: initialValue }} onSubmit={onSubmit}>
        <Form>
          <Field
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Enter any Roman numeral (e.g. VII)"
            name="query"
          />
          <button type="submit">Convert</button>
        </Form>
      </Formik>
    </div>
  );
}

import "./App.css";
import React, { useState, useEffect } from "react";

import { Routes, Route, useSearchParams } from "react-router-dom";
import { convertRoman } from "./api";
import Convert from "./components/Convert.jsx";

function App() {
  const [arabInt, setArabInt] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  const onQueryChange = ({ query }) => {
    query
      ? setSearchParams({ query: query.toLowerCase() })
      : setSearchParams({});
  };
  useEffect(() => {
    if (query === "") return;
    async function convertRomanToArab() {
      try {
        const response = await convertRoman(query);
        setArabInt(response);
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
          <Convert
            query={query}
            onQueryChange={onQueryChange}
            arabInt={arabInt}
          />
        }
      />
    </Routes>
  );
}

export default App;

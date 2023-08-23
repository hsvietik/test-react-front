import React from "react";
import Input from "./Input";
import Result from "./Result";
function Convert({ query, onQueryChange, arabInt }) {
  return (
    <div>
      <Input initialValue={query} onSubmit={(query) => onQueryChange(query)} />
      <Result query={query} arabInt={arabInt} />
    </div>
  );
}

export default Convert;

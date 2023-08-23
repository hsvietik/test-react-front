import React from "react";

function Result({ query, arabInt }) {
  return (
    <>
      {arabInt && query && (
        <p>
          You entered {query.toUpperCase()} Roman numeral that is {arabInt}
        </p>
      )}
    </>
  );
}

export default Result;

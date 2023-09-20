// Quote.js
import React from "react";

const Quote = ({ text }) => {
  return (
    <>
      <h2 className="quote">
        <i className="fa fa-quote-left" style={{ marginRight: 5 }}>
          {" "}
        </i>
        {text}
      </h2>
    </>
  );
};

export default Quote;

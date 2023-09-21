// NewQuoteButton.js
import React from "react";

const NewQuoteButton = ({ onClick }) => {
  return (
    <>
      <div className="flex">
        <div>
          <button className="new-quote-button" style={{ marginRight: 10 }}>
            <i class="fa fa-twitter"></i>
          </button>
          <button className="new-quote-button">
            <i class="fa fa-tumblr"></i>
          </button>
        </div>
        <div>
          <button className="new-quote-button" onClick={onClick}>
            New Quote
          </button>
        </div>
      </div>
    </>
  );
};

export default NewQuoteButton;

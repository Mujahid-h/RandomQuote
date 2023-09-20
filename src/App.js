// App.js
import React, { useState } from "react";
import Quote from "./Components/Quote";
import Author from "./Components/Author";
import NewQuoteButton from "./Components/NewQuoteButton";
import "./App.css";

const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("#333"); // Default background color

  const getRandomColor = () => {
    // Generate a random color
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      // Set a random background color
      const newColor = getRandomColor();
      setBackgroundColor(newColor);

      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error("Error fetching random quote:", error);
    }
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor: backgroundColor,
        transition: "background-color 0.5s",
      }}
    >
      <Quote className="quote-text" text={quote} />
      <Author className="quote-author" author={author} />
      <NewQuoteButton
        className="new-quote-button"
        onClick={fetchRandomQuote}
        setBackgroundColor={setBackgroundColor} // Pass the setBackgroundColor function
      >
        New Quote
      </NewQuoteButton>
    </div>
  );
};

export default App;

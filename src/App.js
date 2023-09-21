// App.js
import React, { useState, useEffect } from "react";
import Quote from "./Components/Quote";
import Author from "./Components/Author";
import NewQuoteButton from "./Components/NewQuoteButton";
import "./App.css";

const App = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  const getRandomColor = () => {
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

      const newColor = getRandomColor();
      document.body.style.backgroundColor = newColor;
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error("Error fetching random quote:", error);
    }
  };

  return (
    <div className="App">
      <Quote className="quote-text" text={quote} />
      <Author className="quote-author" author={author} />
      <NewQuoteButton className="new-quote-button" onClick={fetchRandomQuote}>
        New Quote
      </NewQuoteButton>
    </div>
  );
};

export default App;

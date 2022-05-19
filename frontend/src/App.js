import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [data, setData] = useState("");
  const [res, setRes] = useState("");
  const handleSubmit = async (e) => {
    console.log(data);
    e.preventDefault();
    const response = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    });
    const body = await response.text();
    setRes(body);
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setData(e.target.value)} />
        <button type="submit">submit</button>
      </form>
      <h1>{res}</h1>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import Dial from "./components/dial";
import "./assets/styles.scss";
import Button from "@mui/material/Button";

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

  const handleClick = (e) => {
    console.log(e.target);
  };
  return (
    <div className="App">
      <div className="dial-grid">
        <Dial number="1" letters="" />
        <Dial number="2" letters="a b c" onClick={handleClick} />
        <Dial number="3" letters="d e f" />
        <Dial number="4" letters="g h i" />
        <Dial number="5" letters="j k l" />
        <Dial number="6" letters="m n o" />
        <Dial number="7" letters="p q r s" />
        <Dial number="8" letters="t u v" />
        <Dial number="9" letters="w x y z" />
        <div></div>
        <Dial number="0" letters="+" />
        <div></div>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" onChange={(e) => setData(e.target.value)} />
          <div>
            <Button type="submit" variant="outlined">
              Combinations
            </Button>
          </div>
        </form>
      </div>
      <h1>{res}</h1>
    </div>
  );
}

export default App;

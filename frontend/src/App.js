import React, { useRef, useState } from "react";
import "./App.css";
import Dial from "./components/dial";
import "./assets/styles.scss";
import Button from "@mui/material/Button";

function App() {
  const [data, setData] = useState("");
  const [res, setRes] = useState("");
  const [words, setWords] = useState([]);
  const numberInput = useRef(null);
  const getWords = async (letters) => {
    let list = [];
    for (let i = 0; i < letters.length; i++) {
      await fetch(`https://api.datamuse.com/sug?s=${letters[i]}&max=1`)
        .then((res) => res.json())
        .then((res) => {
          list.push(res[0]["word"]);
        });
    }

    return list;
  };

  const handleSubmit = async (e) => {
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
    const words = await getWords(body.split(" "));
    setWords(words.join(", "));
  };

  const reset = () => {
    numberInput.current.value = "";
    setData(numberInput.current.value);
  };

  const handleClick = (e) => {
    let numberValue = e.currentTarget.dataset.number;
    let totalValue = (numberInput.current.value += numberValue);
    setData(totalValue);
  };
  return (
    <div className="App">
      <div className="start-mssg">
        <h1>Welcome to word converter</h1>
        <h3>To start please insert a number 👇</h3>
      </div>
      <input className="input" type="text" ref={numberInput} />
      <div className="dial-grid">
        <Dial number="1" letters="" />
        <Dial number="2" letters="a b c" onClick={handleClick} />
        <Dial number="3" letters="d e f" onClick={handleClick} />
        <Dial number="4" letters="g h i" onClick={handleClick} />
        <Dial number="5" letters="j k l" onClick={handleClick} />
        <Dial number="6" letters="m n o" onClick={handleClick} />
        <Dial number="7" letters="p q r s" onClick={handleClick} />
        <Dial number="8" letters="t u v" onClick={handleClick} />
        <Dial number="9" letters="w x y z" onClick={handleClick} />
        <div></div>
        <Dial number="0" letters="+" />
        <div></div>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <Button type="submit" variant="outlined">
              Get Combinations
            </Button>
            <div>
              <Button
                type="text"
                color="error"
                variant="outlined"
                onClick={reset}
              >
                Clear
              </Button>
            </div>
          </div>
        </form>
      </div>
      <h2>{res}</h2>

      <div>{words.length > 1 && <h3>Recommended words: {words}</h3>}</div>
    </div>
  );
}

export default App;

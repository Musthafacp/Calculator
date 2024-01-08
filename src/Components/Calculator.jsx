import React, { useState } from "react";

function Calculator() {
  const [state, setState] = useState("");

  const [result, setResult] = useState("");

  const changeState = (value) => {
    setState((prev) => prev + value);
  };

  const handleButtonClick = (value) => {
    changeState(value);
  };

  const handleEqual = () => {
      setResult(eval(state).toString());
      setState("");
  };

  const handleClear = () => {
    setState("");
    setResult("")
  };

  return (
    <>
      <h1 className="calcHead">Calculator</h1>
      <div className="calculator">

        <div className="cell result">
          <div>{result}</div>
          <div>{state}</div>
        </div>

        <button className="cell AC" onClick={handleClear}>
          AC
        </button>

        <button className="cell Delete" onClick={() => setState(state.slice(0, -1))}>
          DEL
        </button>

        <button className="cell division" onClick={() => changeState("/")}>
          ÷
        </button>

        <button className="cell nine" onClick={() => handleButtonClick("7")}>
          7
        </button>

        <button className="cell eight" onClick={() => handleButtonClick("8")}>
          8
        </button>

        <button className="cell seven" onClick={() => handleButtonClick("9")}>
          9
        </button>

        <button className="cell multip" onClick={() => changeState("*")}>
          x
        </button>

        <button className="cell six" onClick={() => handleButtonClick("4")}>
          4
        </button>

        <button className="cell five" onClick={() => handleButtonClick("5")}>
          5
        </button>

        <button className="cell four" onClick={() => handleButtonClick("6")}>
          6
        </button>

        <button className="cell add" onClick={() => changeState("+")}>
          +
        </button>
        <button className="cell three" onClick={() => handleButtonClick("1")}>
          1
        </button>

        <button className="cell two" onClick={() => handleButtonClick("2")}>
          2
        </button>

        <button className="cell one" onClick={() => handleButtonClick("3")}>
          3
        </button>

        <button className="cell subtract" onClick={() => changeState("-")}>
          -
        </button>

        <button className="cell dot" onClick={() => handleButtonClick(".")}>
          .
        </button>
        <button className="cell zero" onClick={() => handleButtonClick("0")}>
          0
        </button>

        <button className="cell equaTo" onClick={handleEqual}>
          =
        </button>
      </div>
    </>
  );
}

export default Calculator;

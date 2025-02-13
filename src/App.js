import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const today = new Date();
  today.setDate(today.getDate() + count);

  function changeRange(event) {
    setStep(event.target.value);
  }

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  function handleKeyUp(event) {
    setCount(Number(event.target.value));
  }

  return (
    <div>
      <input
        type="range"
        min="0"
        max="10"
        onChange={changeRange}
        value={step}
      />
      {step}
      <br />
      <button onClick={() => setCount((c) => c - Number(step))}>-</button>
      <input type="text" value={count} onChange={handleKeyUp} />
      <button onClick={() => setCount((c) => c + Number(step))}>+</button>
      <br />
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{today.toDateString()}</span>
      </p>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}

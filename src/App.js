import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/slices/counter";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0); --> we don't need this since we use redux

  // access the state variable ('value') from redux state using useSelector
  const {value} = useSelector((state) => state.counter)
  // const value = useSelector((state) => state.counter.value)

  const dispatch = useDispatch()

  return (
    <div className="App">
      <h1>Counter</h1>
      <h1>{value}</h1>
      {/* <button onClick={() => setCount(count - 1)}>-</button> */}
      <button onClick={() => dispatch(decrement())}>-</button>

      {/* <button onClick={() => setCount(count + 1)}>+</button> */}
      <button onClick={() => dispatch(increment())}>+</button>

    </div>
  );
}

export default App;

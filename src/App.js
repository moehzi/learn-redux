import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, mulitply } from './actions';
import { useState } from 'react';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispacth = useDispatch();
  const [multiplyNum, setMultiplyNum] = useState(0);
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispacth(increment())}>+</button>
      <button onClick={() => dispacth(decrement())}>-</button>
      <div>
        <input
          type="number"
          value={multiplyNum}
          style={{ padding: '5px' }}
          onChange={(e) => setMultiplyNum(e.target.value)}
        ></input>
        <button onClick={() => dispacth(mulitply(multiplyNum))}>
          Multiply
        </button>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

// In windows - use npm run ssr to run the SSR
// If using yarn - yarn ssr

function App() {
  const [counter, setCounter] = React.useState(0);

  const increment = () => (
    setCounter(counter + 1)
  )

  const decrement = () => (
    setCounter(counter - 1)
  )

  const reset = () => (
    setCounter(0)
  )
  return (
    <div className="App">
      <p>{counter}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;

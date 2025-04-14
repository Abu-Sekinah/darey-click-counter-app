import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const limit = 10;

  const increase = () => setCount(prev => prev + 1);
  const decrease = () => setCount(prev => (prev > 0 ? prev - 1 : 0));

  return (
    <div className="counter-container">
      <h2>Click Counter</h2>
      <div className="count-display">{count}</div>
      <div className="buttons">
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
      </div>
      {count >= limit && <p className="limit-msg">You've reached the limit!</p>}
    </div>
  );
};

export default Counter;
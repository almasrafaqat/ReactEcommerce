import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Comp = () => {
    const [count, setCount] = useState(1);
  
    useEffect(() => {
      setCount(JSON.parse(localStorage.getItem("count")));
    }, []);
  
    useEffect(() => {
      localStorage.setItem("count", count);
    }, [count]);
  
    return (
      <div className="App">
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    );
  };


  export default Comp;
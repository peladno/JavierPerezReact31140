import React, { useState } from "react";

let Counter = () => {
  const [number, setNumber] = useState(0);
  const [date, setDate] = useState(Date());


  const increment = () => {
    setNumber(number + 1);
    setDate(Date());
  };

  const decreasing = () => {
    if (number > 0) setNumber(number -1);
    setDate(Date());
  }

  return (
    <>
      <h1>Counter</h1>
      <div>
        <h3>{number}</h3>
        <h4>{date}</h4>
        <button onClick={increment}>+</button>
        <button onClick={decreasing}>-</button>
      </div>
    </>
  )
}

export default Counter;
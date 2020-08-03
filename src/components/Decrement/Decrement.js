import React from "react";

const Decrement = (props) => {
  const { decrementValue } = props;

  return <button onClick={decrementValue}>Decrement</button>;
};

export default Decrement;

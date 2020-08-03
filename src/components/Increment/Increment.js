import React from "react";

const Increment = (props) => {
  const { incrementValue } = props;

  return <button onClick={incrementValue}>Increment</button>;
};

export default Increment;

import React from "react";

const Reset = (props) => {
  const { resetValue } = props;

  return <button onClick={resetValue}>Reset</button>;
};

export default Reset;

import React from "react";

const Count = (props) => {
  const { count } = props;
  return <h3 style={{ color: "yellow" }}>{count}</h3>;
};

export default Count;

import React from "react";

import Store from "./store";
import {
  CountValue,
  IncrementCount,
  DecrementCount,
  ResetCount,
} from "./components";

import "./App.css";

function App() {
  return (
    <Store>
      <div className="app">
        <div className="app-wrapper">
          <h2 style={{ margin: 0 }}>Counter</h2>
          <CountValue />
          <div className="button-container">
            <IncrementCount />
            <DecrementCount />
            <ResetCount />
          </div>
        </div>
      </div>
    </Store>
  );
}

export default App;

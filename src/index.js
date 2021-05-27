import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from "./App";
import Dashboard from "./components/pages/Dashboard/Dashboard";

ReactDOM.render(
    <React.StrictMode>
      <Dashboard />
    </React.StrictMode>,
    document.getElementById('root')
  );
  


ReactDOM.render(<App />, document.getElementById("root"));



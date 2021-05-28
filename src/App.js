import React from "react";
import './App.css';
import Dashboard from "./components/pages/Dashboard/Dashboard";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is <code>findpaws</code> Project!
          < Dashboard/>
        </p>
      </header>
    </div>
  );
}

export default App;

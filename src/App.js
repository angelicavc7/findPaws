import React from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Found from "./pages/Found/Found";
import Lost from "./pages/Lost/Lost";
import Header from "./Components/Header/Header";

function App() {
  return (
    <Router>
      <Header>
        <div>
          <Route exact path="/" component={Dashboard}>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/found" component={Found} />
            <Route exact path="/lost" component={Lost} />
          </Route>
        </div>
      </Header>
    </Router>
  );
}

export default App;

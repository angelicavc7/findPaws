import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Found from "./pages/Found/Found";
import Lost from "./pages/Lost/Lost";
import Search from "./pages/Search/Search";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer/index";


function App() {
  return (
    
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <Wrapper>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/found" component={Found} />
            <Route exact path="/lost" component={Lost} />
            <Route exact path="/search" component={Search} />
          </Wrapper>
        </Router>
      </div>
      <Footer />
    </div>
   
  );
}
export default App;

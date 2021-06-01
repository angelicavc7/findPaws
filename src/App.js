import React from "react"
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Found from "./pages/Found/index";
import Lost from "./pages/Lost/index";
import Header from "./components/Header/Header"
// import {Menu} from 'antd';
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <Router>
      <div>
      {/* <Header/> */}
      <Wrapper>
        <Route exact path ="/" component={Dashboard}/>
        <Route exact path = "/dashboard" component={Dashboard} />
        <Route exact path = "/found" component={Found} />
        <Route exact path = "/lost" component={Lost} />
    </Wrapper>
      </div>
    </Router>
  );
}
export default App;
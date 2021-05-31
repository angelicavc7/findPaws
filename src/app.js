
import React from 'react';
import { Button } from 'antd';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard.js';
import Nav from './components/nav/Nav.js';




const App = () => (
  <div className="App">
    <Button type="primary">Button</Button>
    <nav>
      < Nav/>
    </nav>
  </div>
);

export default App;

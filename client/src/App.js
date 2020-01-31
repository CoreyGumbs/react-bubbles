import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Auth/Login";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import BubblePage  from './components/BubblePage';
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route path='/bubbles' component={BubblePage} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
    </Router>
  );
}

export default App;

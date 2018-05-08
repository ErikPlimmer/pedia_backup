import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Baby from "./components/Baby/Baby";
import Toddlers from "./components/Toddlers/Toddlers";
import Child from "./components/Child/Child";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route exact="exact" path="/" component={Home}/>
        <Route exact="exact" path="/Baby" component={Baby}/>
        <Route exact="exact" path="/Toddlers" component={Toddlers}/>
        <Route exact="exact" path="/Child" component={Child}/>
      </div>
    </Router>
  );
  }
}

export default App;

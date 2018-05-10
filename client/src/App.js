import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Articles from "./components/Articles/Articles";
import Recipes from "./components/Recipes/Recipes";
import Profile from "./components/Profile/Profile";
import './App.css';

class App extends React.Component {
  render() {
    return (<Router>
      <div className="App">
        <Route exact="exact" path="/" component={Home}/>
        <Route exact="exact" path="/Articles" component={Articles}/>
        <Route exact="exact" path="/Recipes" component={Recipes}/>
        <Route exact="exact" path="/Profile" component={Profile}/>

      </div>
    </Router>);
  }
}

export default App;

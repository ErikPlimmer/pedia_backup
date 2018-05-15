import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Articles from "./components/Articles/Articles";
import Profile from "./components/Profile/Profile";
import RecipePage from './components/Recipes/RecipePage';
import './App.css';


class App extends React.Component {
  render() {
    return (<Router>
      <div className="App">

        <Route exact path="/" component={Home}/>
        <Route path="/Articles" component={Articles}/>
        <Route path="/RecipePage" component={RecipePage}/>
        <Route path="/Profile" component={Profile}/>
        

      </div>
    </Router>);
  }
}

export default App;

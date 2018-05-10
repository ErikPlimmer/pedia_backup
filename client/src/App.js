import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Articles from "./components/Articles/Articles";
<<<<<<< HEAD
import Recipes from "./components/Recipes/Recipes";
import Child from "./components/Child/Child";
=======
import Profile from "./components/Profile/Profile";
>>>>>>> 3206f74a9a1a61ab0777e7e94806a7285951b174
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route exact="exact" path="/" component={Home}/>
        <Route exact="exact" path="/Articles" component={Articles}/>
<<<<<<< HEAD
        <Route exact="exact" path="/Recipes" component={Recipes}/>
        <Route exact="exact" path="/Child" component={Child}/>
=======
        <Route exact="exact" path="/Profile" component={Profile}/>
>>>>>>> 3206f74a9a1a61ab0777e7e94806a7285951b174
      </div>
    </Router>
  );
  }
}

export default App;

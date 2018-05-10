import React from 'react';
import {Link} from "react-router-dom";
import "./pricing.css";
import "./Recipes.css";

class Recipes extends React.Component {
  render() {
    return (<div className="App">
    <div class="header">
        <div class="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">

            <ul class="pure-menu-list">
                <li class="pure-menu-item"><Link to="/" class="pure-menu-link">Home Page</Link></li>
                <li class="pure-menu-item"><Link to="/Articles" class="pure-menu-link">Articles</Link></li>
                <li class="pure-menu-item"><Link to="#" class="pure-menu-link">Sign Up</Link></li>
            </ul>
        </div>
    </div>

    <div class="splash-container">
        <div class="splash">
            <h1 class="splash-head">Welcome to PediaPedia</h1>
            <p class="splash-subhead">
            Search recipes below to find the perfect meal for your family.
            </p>
 
        </div>
    </div>

<div class="footer">
  PediaPedia ©
</div>


  </div>);
  }
}

export default Recipes;
import React from 'react';
import {Link} from "react-router-dom";
import "./pricing.css";
import "./Recipes.css";
import RecipeSearch from "./RecipeSearch";

class RecipePage extends React.Component {
  render() {
    return (<div className="App">
    <div className="header">
        <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">

            <ul className="pure-menu-list">

                <li className="pure-menu-item"><Link to="/" className="pure-menu-link">Home Page</Link></li>
                <li className="pure-menu-item"><Link to="/Articles" className="pure-menu-link">Articles</Link></li>
                <li className="pure-menu-item"><Link to="#" className="pure-menu-link">Sign Up</Link></li>
            </ul>
        </div>
    </div>

    <div className="splash-container">
        <div className="splash">
            <h1 className="splash-head">Welcome to PediaPedia</h1>
            <p className="splash-subhead">
            Search recipes below to find the perfect meal for your family.
            </p>
            
        </div>
      
    </div>
    <div className="containerDiv"><RecipeSearch /></div>
  {/* <div className="splash-secondary"><h1>Recipe Search area</h1><RecipeSearch /></div> */}
<div className="footer">
  PediaPedia ©
</div>


  </div>);
  }
}

export default RecipePage;
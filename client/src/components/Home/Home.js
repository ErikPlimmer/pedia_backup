import React from 'react';
import {Link} from "react-router-dom";
import "./Home.css";
import "./HomePage.css";

class Home extends React.Component {
  render() {
    return (<div className="App">
    <div className="header">
        <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">


            <ul className="pure-menu-list">

                <li className="pure-menu-item"><Link to="/RecipePage" className="pure-menu-link">Recipes</Link></li>
                <li className="pure-menu-item"><Link to="/Articles" className="pure-menu-link">Articles</Link></li>

                <li className="pure-menu-item"><Link to="#" className="pure-menu-link">Sign Up</Link></li>
            </ul>
        </div>
    </div>

    <div className="splash-containerHome">
        <div className="splash">
            <h1 className="splash-head">Welcome to PediaPedia</h1>
            <p className="splash-subhead">
                A place for parents to find useful information to help navigate through parenthood.
            </p>

            <p>
                <Link to="/Articles" className="pure-button pure-button-primary" style={{marginRight:"75px"}}>Articles!</Link>

                <Link to="/RecipePage" className="pure-button pure-button-primary">Recipes!</Link>
            </p>
        </div>
    </div>

<div className="footer">
  PediaPedia ©
</div>


  </div>);
  }
}

export default Home;

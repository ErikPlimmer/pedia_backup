import React from 'react';
import {Link} from "react-router-dom";
<<<<<<< HEAD
import "./pricing.css";
=======
import "./Home.css";
>>>>>>> 3206f74a9a1a61ab0777e7e94806a7285951b174
import "./HomePage.css";

class Home extends React.Component {
  render() {
    return (<div className="App">
    <div class="header">
        <div class="home-menuHome pure-menu pure-menu-horizontal pure-menu-fixed">

            <ul class="pure-menu-list">
<<<<<<< HEAD
                <li class="pure-menu-item"><Link to="/Articles" class="pure-menu-link">Search</Link></li>
                <li class="pure-menu-item"><Link to="/Recipes" class="pure-menu-link">Recipes</Link></li>
=======
                <li class="pure-menu-item"><Link to="/Articles" class="pure-menu-link">Articles</Link></li>
                <li class="pure-menu-item"><Link to="/Profile" class="pure-menu-link">My Profile</Link></li>
>>>>>>> 3206f74a9a1a61ab0777e7e94806a7285951b174
                <li class="pure-menu-item"><Link to="#" class="pure-menu-link">Sign Up</Link></li>
            </ul>
        </div>
    </div>

    <div class="splash-containerHome">
        <div class="splash">
            <h1 class="splash-head">Welcome to PediaPedia</h1>
            <p class="splash-subhead">
                A place for parents to find useful information to help navigate through parenthood.
            </p>
            <p>
                <Link to="/Articles" class="pure-button pure-button-primary">Get Started!</Link>
            </p>
        </div>
    </div>

<div class="footer">
  PediaPedia ©
</div>


  </div>);
  }
}

export default Home;

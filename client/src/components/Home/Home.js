import React from 'react';
import {Link} from "react-router-dom";
import "./pricing.css";
import "./marketing.css";

class Home extends React.Component {
  render() {
    return (<div className="App">
    <div class="header">
        <div class="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">

            <ul class="pure-menu-list">
                <li class="pure-menu-item pure-menu-selected"><a href="#" class="pure-menu-link">Home</a></li>
                <li class="pure-menu-item"><Link to="#" class="pure-menu-link">Tour</Link></li>
                <li class="pure-menu-item"><Link to="#" class="pure-menu-link">Sign Up</Link></li>
            </ul>
        </div>
    </div>

    <div class="splash-container">
        <div class="splash">
            <h1 class="splash-head">Big Bold Text</h1>
            <p class="splash-subhead">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <p>
                <Link to="/" class="pure-button pure-button-primary">Get Started</Link>
            </p>
        </div>
    </div>

      <div class="footer l-box is-center">
            View the source of this layout to learn more. Made with love by the YUI Team.
        </div>

  </div>);
  }
}

export default Home;

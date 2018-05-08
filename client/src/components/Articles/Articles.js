import React from 'react';
import {Link} from "react-router-dom";
import "./pricing.css";
import "./marketing.css";

class Articles extends React.Component {
  render() {
    return (<div className="App">
    <div class="header">
        <div class="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">

            <ul class="pure-menu-list">
                <li class="pure-menu-item"><Link to="/Articles" class="pure-menu-link">Search</Link></li>
                <li class="pure-menu-item"><Link to="#" class="pure-menu-link">Tour</Link></li>
                <li class="pure-menu-item"><Link to="#" class="pure-menu-link">Sign Up</Link></li>
            </ul>
        </div>
    </div>

      <div class="banner">
        <h1 class="banner-head">
          Articles - Web Scraper (Think of what to write here)
        </h1>
      </div>


      <div class="footer l-box">
        <p></p>
      </div>
    </div>);
  }
}

export default Articles;

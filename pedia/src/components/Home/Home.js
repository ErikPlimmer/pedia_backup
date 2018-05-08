import React from 'react';
import {Link} from "react-router-dom";
import "./pricing.css";

class Home extends React.Component {
  render() {
    return (<div className="App">
      <div class="pure-menu pure-menu-horizontal">

        <Link to="/" class="pure-menu-heading">PediaPedia</Link>
        <ul class="pure-menu-list">
          <li class="pure-menu-item">
            <Link to="/Baby" class="pure-menu-link">Baby</Link>
          </li>
          <li class="pure-menu-item pure-menu-selected">
            <Link to="/Toddlers" class="pure-menu-link">Toddlers</Link>
          </li>
          <li class="pure-menu-item">
            <Link to="/Child" class="pure-menu-link">Child</Link>
          </li>
        </ul>
      </div>

      <div class="banner">
        <h1 class="banner-head">
          Enter a catchy phrase here.
        </h1>
      </div>

      <div class="l-content">
        <div class="pricing-tables pure-g">
          <div class="pure-u-1 pure-u-md-1-3">
            <div class="pricing-table pricing-table-free">
              <div class="pricing-table-header">

                <span class="pricing-table-price">
                  Baby
                </span>
              </div>

              <ul class="pricing-table-list">
                <li>Baby Topic 1</li>
                <li>Baby Topic 2</li>
                <li>Baby Topic 3</li>
                <li>Baby Topic 4</li>
                <li>Baby Topic 5</li>
                <li>Baby Topic 6</li>
              </ul>

              <button class="button-choose pure-button"><Link to="/Baby">Go to Baby</Link></button>
            </div>
          </div>

          <div class="pure-u-1 pure-u-md-1-3">
            <div class="pricing-table pricing-table-biz pricing-table-selected">
              <div class="pricing-table-header">

                <span class="pricing-table-price">
                  Toddler
                </span>
              </div>

              <ul class="pricing-table-list">
                <li>Toddler Topic 1</li>
                <li>Toddler Topic 2</li>
                <li>Toddler Topic 3</li>
                <li>Toddler Topic 4</li>
                <li>Toddler Topic 5</li>
                <li>Toddler Topic 6</li>
              </ul>

              <button class="button-choose pure-button"><Link to="/Toddlers">Go to Toddlers</Link></button>
            </div>
          </div>

          <div class="pure-u-1 pure-u-md-1-3">
            <div class="pricing-table pricing-table-enterprise">
              <div class="pricing-table-header">

                <span class="pricing-table-price">
                  Child
                </span>
              </div>

              <ul class="pricing-table-list">
                <li>Child Topic 1</li>
                <li>Child Topic 2</li>
                <li>Child Topic 3</li>
                <li>Child Topic 4</li>
                <li>Child Topic 5</li>
                <li>Child Topic 6</li>
              </ul>

              <button class="button-choose pure-button">  <Link to="/Child" class="pure-menu-link">Go to Child</Link></button>
            </div>
          </div>
        </div>

        <div class="information pure-g">
          <div class="pure-u-1 pure-u-md-1-2">
            <div class="l-box">
              <h3 class="information-head">Section Title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
          </div>

          <div class="pure-u-1 pure-u-md-1-2">
            <div class="l-box">
              <h3 class="information-head">Section 2 Title</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse.
              </p>
            </div>
          </div>

          <div class="pure-u-1 pure-u-md-1-2">
            <div class="l-box">
              <h3 class="information-head">Section 3 Title</h3>
              <p>
                Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          <div class="pure-u-1 pure-u-md-1-2">
            <div class="l-box">
              <h3 class="information-head">Section 4 Title</h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="footer l-box">
        <p></p>
      </div>
    </div>);
  }
}

export default Home;

import React from 'react';
import {Link} from "react-router-dom";
import "./ArticlesTwo.css";
import "./ArticlesOne.css";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody,
} from 'reactstrap';

class Articles extends React.Component {
  render() {
    return (<div className="App">
    <div class="header">
        <div class="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">

            <ul class="pure-menu-list">
                <li class="pure-menu-item"><Link to="/" class="pure-menu-link">Home page</Link></li>
                <li class="pure-menu-item"><Link to="/Articles" class="pure-menu-link">Search</Link></li>
                <li class="pure-menu-item"><Link to="/RecipePage" class="pure-menu-link">Recipes</Link></li>
                <li class="pure-menu-item"><Link to="#" class="pure-menu-link">Sign Up</Link></li>
            </ul>
        </div>
    </div>

      <CardColumns style={{
          marginTop: '150px',
          marginLeft:'75px',
          marginRight: '75px',
          marginBottom: '200px'
        }}>
        <Card>
          <CardImg top="top" width="100%" src={require( "./fourBabies.png")} alt="Card image cap"/>
          <CardBody>
            <CardTitle>Keep</CardTitle>
            <CardSubtitle>Keep</CardSubtitle>
            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a ligula in ligula molestie iaculis non et elit. Fusce tincidunt justo at diam rhoncus, non varius dui iaculis.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top="top" width="100%" src={require( "./diverseToddlers.png")} alt="Card image cap"/>
          <CardBody>
            <CardTitle>Keep</CardTitle>
            <CardSubtitle>Keep</CardSubtitle>
            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a ligula in ligula molestie iaculis non et elit. Fusce tincidunt justo at diam rhoncus, non varius dui iaculis.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top="top" width="100%" src={require( "./threeToddlers.png")} alt="Card image cap"/>
          <CardBody>
            <CardTitle>Keep</CardTitle>
            <CardSubtitle>Keep</CardSubtitle>
            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a ligula in ligula molestie iaculis non et elit. Fusce tincidunt justo at diam rhoncus, non varius dui iaculis.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </CardColumns>




      <div class="footer l-box">
        <p></p>
      </div>
    </div>);
  }
}

export default Articles;

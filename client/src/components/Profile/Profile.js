import React from 'react';
import {Link} from "react-router-dom";
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody
} from 'reactstrap';
import "./Profile.css";

class Profile extends React.Component {
  render() {
    return (<div className="Profile">

    <div class="header">
        <div class="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">

            <ul class="pure-menu-list">
                <li class="pure-menu-item"><Link to="/Articles" class="pure-menu-link">Articles</Link></li>
                <li class="pure-menu-item"><Link to="/Profile" class="pure-menu-link">My Profile</Link></li>
                <li class="pure-menu-item"><Link to="/RecipePage" class="pure-menu-link">Sign Up</Link></li>
            </ul>
        </div>
    </div>

      <CardColumns style={{
          marginTop: '75px',
          marginLeft:'75px',
          marginRight: '75px'
        }}>
        <Card>
          <CardImg top="top" width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap"/>
          <CardBody>
            <CardTitle>Keep</CardTitle>
            <CardSubtitle>Keep</CardSubtitle>
            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a ligula in ligula molestie iaculis non et elit. Fusce tincidunt justo at diam rhoncus, non varius dui iaculis.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top="top" width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap"/>
          <CardBody>
            <CardTitle>Keep</CardTitle>
            <CardSubtitle>Keep</CardSubtitle>
            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a ligula in ligula molestie iaculis non et elit. Fusce tincidunt justo at diam rhoncus, non varius dui iaculis.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top="top" width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap"/>
          <CardBody>
            <CardTitle>Keep</CardTitle>
            <CardSubtitle>Keep</CardSubtitle>
            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a ligula in ligula molestie iaculis non et elit. Fusce tincidunt justo at diam rhoncus, non varius dui iaculis.</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </CardColumns>
    </div>);
  }
}

export default Profile;

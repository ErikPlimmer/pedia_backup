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
import "./pricing.css";

class Baby extends React.Component {
  render() {
    return (<div className="Baby">

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

        <CardColumns>
          <Card>
            <CardImg top="top" width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap"/>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a ligula in ligula molestie iaculis non et elit. Fusce tincidunt justo at diam rhoncus, non varius dui iaculis.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg top="top" width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap"/>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a ligula in ligula molestie iaculis non et elit.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card body="body" inverse="inverse" style={{
              backgroundColor: '#333',
              borderColor: '#333'
            }}>
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a ligula in ligula molestie iaculis non et elit.</CardText>
            <Button>Button</Button>
          </Card>
          <Card>
            <CardImg top="top" width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap"/>
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a ligula in ligula molestie iaculis non et elit. Fusce tincidunt justo at diam rhoncus, non varius dui iaculis. Phasellus cursus dui aliquet, bibendum ante vestibulum, feugiat dolor. Suspendisse quis dolor quis lorem tristique suscipit.</CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
          <Card body="body" inverse="inverse" color="primary">
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</CardText>
            <Button color="secondary">Button</Button>
          </Card>
        </CardColumns>
      </div>);
  }
}

export default Baby;

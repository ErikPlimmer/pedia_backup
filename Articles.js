import React from 'react';
import {Link} from "react-router-dom";
import "./ArticlesTwo.css";
import "./ArticlesOne.css";
import $ from 'jquery'; 
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

const axios = require("axios");
var cheerio = require("cheerio");

class Articles extends React.Component {

  state = {
    data: []
  }

  componentDidMount = () => {
    axios.get('/get-articles').then(articles => this.setState({ data: articles.data }))
  }

  getArticles = () => {
    axios.get('/scrape').then(result => {
      axios.get('/get-articles').then(articles => {
        console.log(articles)
        this.setState({
          data: articles.data
        })
      })      
    })
  }

  render() {
    console.log(this.state.data)
    return (<div className="App">
    <div class="header">
        <div class="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">

            <ul class="pure-menu-list">
                <li class="pure-menu-item"><Link to="/" class="pure-menu-link">Home page</Link></li>
                <li class="pure-menu-item"><Link to="/Articles" class="pure-menu-link">Search</Link></li>
                <li class="pure-menu-item"><Link to="/RecipePage" class="pure-menu-link">Recipes</Link></li>
                <li class="pure-menu-item"><Link to="/Profile" class="pure-menu-link">Profile</Link></li>
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
            <Button onClick={this.getArticles}>Button</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top="top" width="100%" src={require( "./diverseToddlers.png")} alt="Card image cap"/>
          <CardBody>
            <CardTitle>Keep</CardTitle>
            <CardSubtitle>Keep</CardSubtitle>
            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a ligula in ligula molestie iaculis non et elit. Fusce tincidunt justo at diam rhoncus, non varius dui iaculis.</CardText>
            <Button onClick={this.getArticles}>Button</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top="top" width="100%" src={require( "./threeToddlers.png")} alt="Card image cap"/>
          <CardBody>
            <CardTitle>Keep</CardTitle>
            <CardSubtitle>Keep</CardSubtitle>
            <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a ligula in ligula molestie iaculis non et elit. Fusce tincidunt justo at diam rhoncus, non varius dui iaculis.</CardText>
           <Button onClick={this.getArticles}>Button</Button>
          </CardBody>
        </Card>
      </CardColumns>

                    <div id="wrapper">
                <div>{this.state.data && this.state.data.length > 0 ? this.state.data.map(article => {
                  console.log('hey im working here')
                    return(
                      <div id="wrapper" style={{backgroundColor: 'light-blue'}}>
                      <p>{article.title}</p>
                      <p>{article.link}</p>
                </div>)
                }) : null }</div>
              </div>




      <div class="footer l-box">
        <p></p>
      </div>
    </div>);
  }
}

export default Articles;

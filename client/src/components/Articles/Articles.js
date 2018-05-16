import React from 'react';
import {Link} from "react-router-dom";
import "./ArticlesTwo.css";
import "./ArticlesOne.css";
// import $ from 'jquery';
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
// var cheerio = require("cheerio");

class Articles extends React.Component {

  state = {
    data: []
  }

  componentDidMount = () => {
    axios.get('/get-articles-baby').then(articles => this.setState({ data: articles.data }))
    
  }

  getArticlesBaby = () => {
    axios.get('/scrape-baby').then(result => {
      axios.get('/get-articles-baby').then(articles => {
        console.log("articles:",articles)
        this.setState({
          data: articles.data
        })
      })
    })
  }
  deleteArticles = (id) => {
      axios.delete('/delete-articles').then(articles => {

        this.setState({
          data: ""
        })
      })
  }
  saveArticles = () => {
    axios.create('/save-articles').then(articles => {
      console.log(articles)
      this.setState({
        data: articles.data
      })
    })
  }
  clearArticles = () => {
    this.setState({
      data: ''
    })
  };

  render() {
    console.log(this.state.data)
    return (<div className="App">
    <div className="header">
        <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">

            <ul className="pure-menu-list">
                <li className="pure-menu-item"><Link to="/" className="pure-menu-link">Home page</Link></li>
                {/* <li className="pure-menu-item"><Link to="/Articles" className="pure-menu-link">Search</Link></li> */}
                <li className="pure-menu-item"><Link to="/RecipePage" className="pure-menu-link">Recipes</Link></li>
                <li className="pure-menu-item"><Link to="#" className="pure-menu-link">Sign Up</Link></li>
            </ul>
        </div>
    </div>

      <CardColumns style={{
          marginTop: '150px',
          marginLeft:'75px',
          marginRight: '75px',
          marginBottom: '50px'
        }}>
        <Card>
          <CardImg top="top" width="100%" src={require( "./babies3.jpg")} alt="Card image cap"/>
          <CardBody>

            <Button outline color="success" size="lg" block onClick={this.getArticlesBaby}>Babies</Button>
            {/* <Button outline color="success" size="lg" block onClick={this.deleteArticles}>clear articles</Button> */}
          </CardBody>

        </Card>
        <Card>
          <CardImg top="top" width="100%" src={require( "./toddlers4.jpeg")} alt="Card image cap"/>
          <CardBody>
          <Button outline color="warning" size="lg" block onClick={this.getArticles}>Toddlers</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top="top" width="100%" src={require( "./children2.jpg")} alt="Card image cap"/>
          <CardBody>
            <Button outline color="danger" size="lg" block onClick={this.getArticles}>Children</Button>
          </CardBody>
        </Card>
      </CardColumns>
                    <div id="wrapper">


                  {this.state.data && this.state.data.length > 0 ? this.state.data.map(article => {
                  
                    return(
                      <div id="wrapper" style={{backgroundColor: 'light-blue'}}>
                      {/* <a href={article.link}>{article.title}</a> */}

        <div className='cardA'>
        <div className='card-header'>
        <h3>
        <a className='article-link' target='_blank' href=  {article.link}  >
        {article.title}
        </a>
        {/* <a className='btn btn-success save'>
        Save Article
        </a> */}
        </h3>
        </div>
        <div className='card-body'>
        {article.headline}
        </div>
        </div>
     
                </div>)
                }) : null }
              </div>




      <div className="footer l-box">
        <p></p>
      </div>
    </div>);
  }

}

export default Articles;

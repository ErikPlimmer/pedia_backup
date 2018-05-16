import React from "react";
import { Button, Form, Label, Input} from 'reactstrap';
import "./Recipes.css";

export default class SearchForm extends React.Component {

  constructor(props){
    super(props);
    console.log(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);

  }

  handleChange(event) {

    console.log("handlechange");
    this.setState({value: event.target.value});
  }

  // handleSubmit(event) {
  //   alert('A name was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }

  onFormSubmit(e){
    e.preventDefault();
    // var location = this.state.location;
    console.log("onFormSubmit value:", this.state.value);

    // if(this.state.value.length>0){
    //   this.value='chicken';

      this.props.onSearch(this.state.value);

    // }


  }

  render(){
    return(
      <div className="container text-center">
        <div>
        <Form onSubmit={this.onFormSubmit}>
      <Label for="exampleInputEmail1"><h1 className="text-info">What ingredients will you be cooking with?</h1></Label>
      <Input type="text" className="form-control" value={this.state.location} onChange={this.handleChange} placeholder="Chicken, cheese, pasta, etc."></Input>
      <br></br>
      <Button type="submit" color="info">Let the search begin!</Button>
        </Form>
      </div>
      </div>

    )
  }
};

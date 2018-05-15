import React from "react";
import { Button, Form, Label, Input} from 'reactstrap';

export default class SearchForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      value: '',
      location: this.location
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({name: event.target.value});
  }
  
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  onFormSubmit= function(e){
    e.preventDefault();

    var location = this.state.location.value;
    console.log("onFormSubmit location:", this.location);
    console.log("onFormSubmit value:", this.state.value);

    if(this.state.location.length>0){
      this.id.location.value='chicken';
      this.props.onSearch(this.state.location);

    }
    this.setState({
      location: e.target.value
    })
console.log("location", this.state.location);

  }

  render(){
    return(
      <div className="container text-center">
        <div>
        <Form onSubmit={this.onFormSubmit}>
      <Label for="exampleInputEmail1"><h1>Ingredients</h1></Label>
      <Input type="text" className="form-control" name="loaction" value={this.state.location} onChange={this.handleChange} placeholder="chicken,cheese,..."></Input>
      <br></br>
      <Button type="submit" color="primary">Primary</Button>
        </Form>
      </div>
      </div>

    )
  }
};


import React from "react";
import { Button, Form, Label, Input} from 'reactstrap';

export default class SearchForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  onFormSubmit= function(e){
    e.preventDefault();

    var location = this.state.location.value;


    if(location.length>0){
      this.id.location.value='chicken';
      this.props.onSearch(location);
      this.setState({
        location
      })
    }
console.log("location", location);

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


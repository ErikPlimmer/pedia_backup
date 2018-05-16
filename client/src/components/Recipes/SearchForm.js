import React from "react";
import { Button, Form, Label, Input} from 'reactstrap';

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
      <Label for="exampleInputEmail1"><h1>Ingredients</h1></Label>
      <Input type="text" className="form-control" value={this.state.location} onChange={this.handleChange} placeholder="chicken,cheese,..."></Input>
      <br></br>
      <Button type="submit" color="primary">Primary</Button>
        </Form>
      </div>
      </div>

    )
  }
};


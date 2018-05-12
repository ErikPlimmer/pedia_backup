import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class SearchForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      // loaction: this.refs.location.value
    }
  }
  onFormSubmit= function(e){
    e.preventDefault();

    var location = this.refs.location.value;
    // var location = this.name.email.value;

    if(location.length>0){
      this.refs.location.value='chicken';
      this.props.onSearch(location);
      this.setState({
        location
      })
    }

  }

  render(){
    return(
      <div className="container text-center">
        <div>
        <form onSubmit={this.onFormSubmit}>
        <Form>
        <FormGroup>
          {/* <Label for="exampleEmail">Email</Label> */}
          {/* <Input name="email" id="location"value="chicken" className="form-control"placeholder="with a placeholder" /> */}
        </FormGroup>
        </Form>
      <label for="exampleInputEmail1"><h1>Ingredients</h1></label>
      <input type="text" ref="location" className="form-control" placeholder="chicken,cheese,..."></input>
      <br></br>
      <button type="submit" className="btn btn-primary center-block">Primary</button>
        </form>
      </div>
      </div>

    )
  }
};


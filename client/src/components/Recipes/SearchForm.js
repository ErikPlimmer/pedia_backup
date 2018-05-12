import React from "react";
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

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
      <Label for="exampleInputEmail1"><h1>Ingredients</h1></Label>
      <Input type="text" ref="location" className="form-control" placeholder="chicken,cheese,..."></Input>
      <br></br>
      <Button type="submit" color="primary">Primary</Button>
        </form>
      </div>
      </div>

    )
  }
};


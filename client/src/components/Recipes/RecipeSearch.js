import React from 'react';
import SearchForm from './SearchForm.js';
import RecipeListEdamam from './RecipeListEdamam.js';
import RecipeSearchAPI from './APIRoutes/API.js';
import { Label } from 'reactstrap';


export default class RecipeSearch extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            temp1: props.temp1,
            location: props.location
        }
    }
    getInitialState= function() {
        return {isLoading: false}
        console.log("in getInitialState", this.isLoading);
    }    

   handleSearch= function(location) {
        // var that = this;
        this.setState({isLoading: true});

        RecipeSearchAPI.getEdamam(location).then(function(temp) {
            this.setState({temp1: temp, isLoading: false});
        }, function(errorMessage) {
                console.log("in handleSearch temp1:" ,this.temp1);
                console.log("in handleSearch temp:" ,this.temp1);
            alert(errorMessage);
        });

    };


    render() {
        var {temp1,location} = this.state;
        return (
            <div>
                <SearchForm onSearch={this.handleSearch}/>
                <br></br>
                {renderMessage()}
            </div>
        );
        function renderMessage() {
            if (this.isLoading) {
                return (
                    <div className="container">
                        <br></br>
                        <div className="container">
                            <div className="text-center">
                                <Label className="pagination-centered">Fetching Recipe.....</Label>
                            </div>
                        </div>
                    </div>
                )
            } else if (temp1 ) {
                return (
                    <div className='row'>
                        <RecipeListEdamam temp1={temp1} location={location}/>

                    </div>
                )
            } 
             else {
                return (
                    <div className="container">
                        <br></br>
                        <div className="container">
                            <div className=" text-center">
                                <Label className="pagination-centered">Insert ingredients.....</Label>
                            </div>
                        </div>
                    </div>
                )
            }
        }

    }
}



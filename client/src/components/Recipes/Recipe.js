import React from "react"; 
import SearchForm from './SearchForm.js';
import RecipeListEdamam from './RecipeListEdamam.js';
import RecipeSearchAPI from "./APIRoutes/API.js";
import {Label} from 'reactstrap';


export default class Recipe extends React.Component {
    // getInitialState() {
    //     return {isLoading: false}
    // }
    constructor(props){
        super(props);
        this.state = {
            isLoading: false
        };
    }

    handleSearch(location) {
        var that = this;
        this.setState({isLoading: true});

        RecipeSearchAPI.getEdamam(location).then(function(temp) {
            that.setState({temp1: temp, isLoading: false});
        }, function(errorMessage) {

            alert(errorMessage);
        });



        if (this.state.isLoading === false) {
            return false;
        } else {
            return true;
        }

    }

    render() {
        var {isLoading,temp1, location} = this.state;
        return (
            <div>
                <SearchForm onSearch={this.handleSearch}/>
                <br></br>
                {renderMessage()}
            </div>
        );
        function renderMessage() {
            if (isLoading) {
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

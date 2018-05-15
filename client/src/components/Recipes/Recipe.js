import React from "react"; 
import SearchForm from './SearchForm.js';
import RecipeListEdamam from './RecipeListEdamam.js';
import RecipeSearchAPI from "./APIRoutes/API.js";
import {Label} from 'reactstrap';


export default class Recipe extends React.Component {
    getInitialState() {
        return {isLoading: false}
    }
    constructor(props){
        super(props);
        this.state = {
            isLoading: false
            
        };
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(value) {
        var that = this;
        this.setState({isLoading: true});
        console.log("value",value);
        RecipeSearchAPI.getEdamam(value).then(function(temp) {
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
        var {isLoading,temp1, value} = this.state;
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
                if (temp1.length === 0){
                    return (
                        <div className="container">
                            <br></br>
                            <div className="container">
                                <div className=" text-center">
                                    <Label className="pagination-centered">Try again.....</Label>
                                </div>
                            </div>
                        </div>
                    )
                }
                return (
                    <div className='row'>
                        <RecipeListEdamam temp1={temp1} value={value}/>
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

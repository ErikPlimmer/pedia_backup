import React from 'react';
import SearchForm from './SearchForm.js';
// import RecipeListF2F from'./RecipeListF2F.js';
import RecipeListEdamam from './RecipeListEdamam.js';
import RecipeSearchAPI from './APIRoutes/API.js';



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
    }    

   handleSearch= function(location) {
        var that = this;
        this.setState({isLoading: true});

        RecipeSearchAPI.getEdamam(location).then(function(temp) {
            that.setState({temp1: temp, isLoading: false});
        }, function(errorMessage) {

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
            if (true) {
                return (
                    <div className="container">
                        <br></br>
                        <div className="container">
                            <div className="text-center">
                                <lable className="pagination-centered">Fetching Recipe.....</lable>
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
                                <lable className="pagination-centered">Insert ingredients.....</lable>
                            </div>
                        </div>
                    </div>
                )
            }
        }

    }
}



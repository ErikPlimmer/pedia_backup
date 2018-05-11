import React from "react";

export default class RecipeListF2F extends React.Component{
  



    render(){
      var {temp2} = this.props;
      var body = [];
      for (var i = 0; i < temp2.length; i++) {
        var str = temp2[i]['title'].substring(0, 30);
        body.push(

          <div className="col-md-3 portfolio-item hvr-grow" key = {i} >
             <a href={temp2[i]['f2f_url']} target="_blank" data-toggle="tooltip" title={temp2[i]['title']}>
                  <img className="img-responsive imageClip" src={temp2[i]['image_url']} alt=""></img>
                  <lable className="pagination-centered">{str}</lable>
              </a>
              <div>
                <br></br>
              </div>
        </div>

        );
    }   

      return(
        <div className="row"> {body} </div>

      )
  }
}



import React from "react";
import {Label} from 'reactstrap';
export default class RecipeListEdamam extends React.Component{

    render() {
        var {temp1} = this.props;
        var body = [];
        for (var i = 0; i < temp1.length; i++) {
            var str = temp1[i]['recipe']['label'].substring(0, 30);
            body.push(
                <div className="col-md-3 portfolio-item hvr-grow" key={i}>
                    <a href={temp1[i]['recipe']['url']} target="_blank" data-toggle="tooltip" title={temp1[i]['recipe']['label']}>
                        <img className="img-responsive imageClip" src={temp1[i]['recipe']['image']} alt=""></img>
                        <Label className="pagination-centered">{str}</Label>
                    </a>
                    <div>
                      <br></br>
                      <br></br>
                    </div>

                </div>

            );
        }

        return (
            <div className="row">
                {body}
            </div>

        )
    }
}

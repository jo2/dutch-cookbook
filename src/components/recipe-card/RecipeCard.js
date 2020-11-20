import React from "react";

const RecipeCard = (props) => {
    return (<div className="col mb-4">
        <div className="card">
            <a href={props.props.slug}>
                <img className="card-img-top" src={props.props.image} alt={props.props.title}/>
                <div className="card-body">
                    <h3 className="card-text card-link">{props.props.title}</h3>
                </div>
            </a>
        </div>
    </div>);
};

export default RecipeCard;

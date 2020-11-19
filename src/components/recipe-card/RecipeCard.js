import React from "react";
import './RecipeCard.scss'

const RecipeCard = (props) => {
    return (<>
        <div className="card__border">
            <div className="card__content">
                <img src={props.props.src} alt={'Bild zu ' + props.props.title}/>
                <h3 className="card__heading">{props.props.title}</h3>
            </div>
        </div>
    </>);
};

export default RecipeCard;
import React from "react";
import './RecipeCard.scss'

const RecipeCard = (props) => {
    return (<>
        <div className="card__border">
            <a href={props.props.slug} className="card__link">
                <div className="card__content">
                    <img src={props.props.path} alt={'Bild zu ' + props.props.title}/>
                    <h3 className="card__heading">{props.props.title}</h3>
                </div>
            </a>
        </div>
    </>);
};

export default RecipeCard;

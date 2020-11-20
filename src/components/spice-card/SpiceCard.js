import React from "react";

const SpiceCard = (props) => {
    return (<div className="col mb-4">
        <div className="card">
            <a href={props.props.spice_slug}>
                <div className="card-body">
                    <h3 className="card-text card-link">{props.props.spice_title}</h3>
                </div>
            </a>
        </div>
    </div>);
};

export default SpiceCard;

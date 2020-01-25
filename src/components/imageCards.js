import React from 'react';

const Card = (props) => {
    return (
        <div className="allCards col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3" 
        key={props.id}
        onClick={() => props.handleClick(props.id, props.clicked)}>
            <img id={props.name} src={props.image} alt={props.name} style={props.size} />
        </div>
    )
}
export default Card;
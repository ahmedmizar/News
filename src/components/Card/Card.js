import React from 'react';
import PropTypes from 'prop-types';
 
const Card = (props) => {
    return (
        <div>
            <img src={props.srce}/>
             <h3>{props.title}</h3>
             <p>{props.publishedAt}</p>
            <p></p>
        </div>
    );
}
 
Card.propTypes = {};
 
export default Card;
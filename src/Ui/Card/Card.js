import React from 'react'
import classes from  './card.module.css'
 const Card = (props) => {
     const addtionclasses = props.className
    return (
        <div className={`${classes.custom_card} ${addtionclasses}`  }>
            {props.children}
        </div>
    )
}
export default Card
import React from "react";

const Square = (props)=>{

    return <div 
            onClick= {props.onClick} 
            className="square-container" 
            style={{ backgroundColor: props.color }}
            >
        <h4 className="square-text">{props.value}</h4>
        </div>
};

export default Square;


// In React, the style attribute accepts an object with CSS properties
//  as key-value pairs. When applying inline styles, the property names 
//  are written in camelCase rather than hyphenated 
//  (e.g., background-color becomes backgroundColor).
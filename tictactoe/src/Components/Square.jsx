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
import React from 'react';
import Pad from "./right-components/Pad";

const Right = ({index, selector, onOff}) => {

    

    return (
        <div className="right">
        {Object.entries(selector).map(element=>{
           return <Pad name={element[1].name} src={element[1].src} key={element[1].id} keyboard={element[1].keyboard} onOff={onOff}/>
        })}
        
        </div>
    );
};

export default Right;
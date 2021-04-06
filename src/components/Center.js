import React from 'react';
import Left from './Left';
import Right from './Right';

const Center = ({index, selector, onOff, handleSelector, handleOnOff}) => {
    return (
        <div className="center">
        <Left handleSelector={handleSelector} handleOnOff={handleOnOff}/>
        <Right index={index} selector={selector} onOff={onOff}/>
            
        </div>
    );
};

export default Center;
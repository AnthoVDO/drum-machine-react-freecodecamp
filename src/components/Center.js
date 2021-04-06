import React from 'react';
import Left from './Left';
import Right from './Right';

const Center = ({index, selector, onOff, handleSelector, handleOnOff, setDisplay, audioVolume, onChangeVolume}) => {
    return (
        <div className="center">
        <Left handleSelector={handleSelector} handleOnOff={handleOnOff} audioVolume={audioVolume} onChangeVolume={onChangeVolume}/>
        <Right index={index} selector={selector} onOff={onOff} setDisplay={setDisplay} audioVolume={audioVolume}/>
            
        </div>
    );
};

export default Center;
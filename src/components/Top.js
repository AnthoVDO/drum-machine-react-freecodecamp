import React from 'react';

const Top = ({onOff, display}) => {
    return (
        <div className="top">
            <h1>Drum machine</h1>
            {onOff === true ? <div className="screen" id="display">{display}</div> : <div className="screen__off"></div>}
            
            <div className={onOff === true ? "led led__green" : "led led__red"} ></div>
            <h2>Made by AnthoVDO</h2>
        </div>
    );
};

export default Top;
import React from 'react';

const Top = ({onOff}) => {
    return (
        <div className="top">
            <h1>Drum machine</h1>
            <div className="screen">Do</div>
            <div className={onOff === true ? "led led__green" : "led led__red"} ></div>
            <h2>Made by AnthoVDO</h2>
        </div>
    );
};

export default Top;
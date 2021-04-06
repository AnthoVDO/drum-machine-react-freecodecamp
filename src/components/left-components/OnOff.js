import React from 'react';

const OnOff = ({handleOnOff}) => {
    return (
        <div className="onOff">
          <button onClick={handleOnOff}>On/Off</button>
        </div>
    );
};

export default OnOff;
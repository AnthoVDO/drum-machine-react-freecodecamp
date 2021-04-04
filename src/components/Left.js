import React from 'react';
import OnOff from "./left-components/OnOff";
import Selector from "./left-components/Selector";
import Volume from "./left-components/Volume";

const Left = () => {
    return (
        <div className="left">
        <OnOff />
        <Selector />
        <Volume />
            
        </div>
    );
};

export default Left;
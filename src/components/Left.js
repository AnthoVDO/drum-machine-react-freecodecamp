import React from 'react';
import OnOff from "./left-components/OnOff";
import Selector from "./left-components/Selector";
import Volume from "./left-components/Volume";

const Left = ({handleSelector, handleOnOff}) => {
    return (
        <div className="left">
        <OnOff handleOnOff={handleOnOff} />
        <Selector handleSelector={handleSelector}/>
        <Volume />
            
        </div>
    );
};

export default Left;
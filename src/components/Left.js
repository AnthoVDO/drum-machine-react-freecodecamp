import React from 'react';
import OnOff from "./left-components/OnOff";
import Selector from "./left-components/Selector";
import Volume from "./left-components/Volume";

const Left = ({handleSelector, handleOnOff, audioVolume, onChangeVolume}) => {
    return (
        <div className="left">
        <OnOff handleOnOff={handleOnOff} />
        <Selector handleSelector={handleSelector}/>
        <Volume audioVolume={audioVolume} onChangeVolume={onChangeVolume}/>
            
        </div>
    );
};

export default Left;
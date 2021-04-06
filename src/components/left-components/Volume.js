import React from 'react';

const Volume = ({audioVolume, onChangeVolume}) => {

    


    return (
        <div className="volume">
            <input type="range" min="0" max="10" value={audioVolume} name="volume" id="volume" className="volume_bare" onChange={onChangeVolume}/>
        </div>
    );
};

export default Volume;
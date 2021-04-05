import React from 'react';

const Volume = () => {
    return (
        <div className="volume">
            <input type="range" name="volume" id="volume" className="volume_bare"/>
        </div>
    );
};

export default Volume;
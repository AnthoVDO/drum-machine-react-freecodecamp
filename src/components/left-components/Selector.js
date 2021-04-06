import React from 'react';

const Selector = ({handleSelector}) => {
    return (
        <div className="selector">
        <button onClick={(e)=>{handleSelector(e)}} data-selector="piano">Piano</button>
        <button onClick={(e)=>{handleSelector(e)}} data-selector="drum">Drum</button>
        <button onClick={(e)=>{handleSelector(e)}} data-selector="dukeNukem">Duke Nukem</button>   
        </div>
    );
};

export default Selector;
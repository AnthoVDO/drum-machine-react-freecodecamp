import React from 'react';

const Pad = ({onOff, name, src, id, keyboard}) => {

    
    

    const handleClick = () => {
        let audio;
    if(onOff === true){
        audio = new Audio(src);
        return audio.play();
    }else{
        return null
    }
        
    }





    return (
        <div className="pad drum-pad" id={id}>
            <button onClick={handleClick} >
            <audio src={src} ></audio>
            <h5>{keyboard}</h5>
            <p>{name}</p>
            </button>    
        </div>
    );
};

export default Pad;
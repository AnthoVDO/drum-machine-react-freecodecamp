import React from 'react';

const Pad = ({onOff, name, src, id, keyboard, setDisplay, audioVolume}) => {

    
    

    const handleClick = (e) => {
        
        let audio;
    if(onOff === true){
        audio = new Audio(src);
        setDisplay(e.currentTarget.dataset.display);
        console.log(e.currentTarget);
        audio.volume = audioVolume/10;
        return audio.play() ;
    }else{
        return null
    }
        
    }



    return (
        <div className="pad drum-pad" id={id}  >
            <button onClick={handleClick} data-display={name} >
            <audio src={src}></audio>
            <h5>{keyboard}</h5>
            <p>{name}</p>
            </button>    
        </div>
    );
};

export default Pad;
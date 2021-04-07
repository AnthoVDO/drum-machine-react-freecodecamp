import React from 'react';

const Pad = ({onOff, name, src, id, keyboard, setDisplay, audioVolume, selector}) => {

    
    

    const handleClick = (e) => {
        let audio;
    if(onOff === true){
        audio = document.getElementById(keyboard);
        console.log(audio)
        setDisplay(e.currentTarget.dataset.display);
        audio.volume = audioVolume/10;
        return audio.play() ;
    }else{
        return null
    }
        
    }



    return (
        
            <button onClick={handleClick} data-display={name} className="drum-pad" id={selector+name} >
            <audio src={src} className="clip" id={keyboard}></audio>
            {keyboard}
            </button>    
        
    );
};

export default Pad;
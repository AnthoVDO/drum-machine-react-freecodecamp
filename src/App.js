import { useState } from "react";
import Center from "./components/Center";
import Top from "./components/Top";
import "./style/app.scss";

function App() {

  const index = {
    
      drum:{
        hihat1:{
          id:"01",
          name:"hihat-1",
          src:'./sound/drum/hihat-1.wav',
          keyboard:'Q'
        },
        hihat2:{
          id:"02",
          name:"hihat-2",
          src:'./sound/drum/hihat-2.wav',
          keyboard:'W'
        },
        kick1:{
          id:"03",
          name:"kick-1",
          src:'./sound/drum/kick-1.wav',
          keyboard:'E'
        },
        kick2:{
          id:"04",
          name:"kick-2",
          src:'./sound/drum/kick-2.wav',
          keyboard:'A'
        },
        kick3:{
          id:"05",
          name:"kick-3",
          src:'./sound/drum/kick-3.wav',
          keyboard:'S'
        },
        shaker:{
          id:"06",
          name:"shaker",
          src:'./sound/drum/shaker.wav',
          keyboard:'D'
        },
        snare1:{
          id:"07",
          name:"snare-1",
          src:'./sound/drum/snare-1.wav',
          keyboard:'Z'
        },
        snare2:{
          id:"08",
          name:"snare-2",
          src:'./sound/drum/snare-2.wav',
          keyboard:'X'
        },
        snare3:{
          id:"09",
          name:"snare-3",
          src:'./sound/drum/snare-3.wav',
          keyboard:'C'
        }

      },
      piano:{
        A:{
          id:"10",
          name:"A",
          src:'./sound/piano/A.mp3',
          keyboard:'Q'
        },
        B:{
          id:"11",
          name:"B",
          src:'./sound/piano/B.mp3',
          keyboard:'W'
        },
        C:{
          id:"12",
          name:"C",
          src:'./sound/piano/C.mp3',
          keyboard:'E'
        },D:{
          id:"13",
          name:"D",
          src:'./sound/piano/D.mp3',
          keyboard:'A'
        },
        E:{
          id:"51",
          name:"E",
          src:'./sound/piano/E.mp3',
          keyboard:'S'
        },
        F:{
          id:"14",
          name:"F",
          src:'./sound/piano/F.mp3',
          keyboard:'D'
        },
        G:{
          id:"15",
          name:"G",
          src:'./sound/piano/G.mp3',
          keyboard:'Z'
        },
        Ca:{
          id:"16",
          name:"Ca",
          src:'./sound/piano/Ca.mp3',
          keyboard:'X'
        },
        Da:{
          id:"17",
          name:"Da",
          src:'./sound/piano/Da.mp3',
          keyboard:'C'
        }

      },
      dukeNukem:{
        gameOver:{
          id:"18",
          name:"duke-game-over",
          src:'./sound/dukeNukem/duke-game-over.mp3',
          keyboard:'Q'
        },
        groovy:{
          id:"19",
          name:"duke-groovy",
          src:'./sound/dukeNukem/duke-groovy.mp3',
          keyboard:'W'
        },
        letsRock:{
          id:"20",
          name:"duke-lets-rock",
          src:'./sound/dukeNukem/duke-lets-rock.mp3',
          keyboard:'E'
        },
        makeMyDay:{
          id:"21",
          name:"duke-make-my-day",
          src:'./sound/dukeNukem/duke-make-my-day.mp3',
          keyboard:'A'
        },
        muchBetter:{
          id:"22",
          name:"duke-much-better",
          src:'./sound/dukeNukem/duke-much-better.mp3',
          keyboard:'S'
        },
        reboot:{
          id:"23",
          name:"duke-reboot",
          src:'./sound/dukeNukem/duke-reboot.mp3',
          keyboard:'D'
        },
        sayHello:{
          id:"24",
          name:"duke-say-hello",
          src:'./sound/dukeNukem/duke-say-hello.mp3',
          keyboard:'Z'
        },
        talking:{
          id:"25",
          name:"duke-talking",
          src:'./sound/dukeNukem/duke-talking.mp3',
          keyboard:'X'
        },
        waitingFor:{
          id:"26",
          name:"duke-waiting-for",
          src:'./sound/dukeNukem/duke-waiting-for.mp3',
          keyboard:'C'
        },

      
    }}
  const[selector, setSelector] = useState(index.drum);
  const[onOff, setOnOff] = useState(true);
  const[display, setDisplay] = useState("");
  const[audioVolume, setAudioVolume] = useState(5);

  const handleSelector = (e) => {
    
    switch(e.target.dataset.selector){
      case "drum":
      return  setSelector(index.drum);
      case "piano":
        return setSelector(index.piano);
      case "dukeNukem":
        return setSelector(index.dukeNukem);
      default:
        return selector;
    }
  }

  const handleOnOff = () => {
    return setOnOff(!onOff);
  }

  const onChangeVolume = (e) => {
    console.log(audioVolume);
    setAudioVolume(e.target.value);
  }

  


  return (
    <div className="App">
    <div className="wraps" id="drum-machine">
       <Top onOff={onOff} display={display}/>
    <Center index={index} selector={selector} onOff={onOff} handleSelector={handleSelector} handleOnOff={handleOnOff} setDisplay={setDisplay} audioVolume={audioVolume} onChangeVolume={onChangeVolume}/>
    <div className="footer">
<h3 >Made for FreeCodeCamp Front end libraries section</h3>
    </div>
    
    </div>
   
      
    </div>
  );
}

export default App;

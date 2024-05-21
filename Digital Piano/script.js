var keyName;
const tmpObj = [];
function startSound(frequency,keyIndx){
  // console.log(keyIndx + "start");
  var tmpCont = new AudioContext();
  var tmpOsci = tmpCont.createOscillator();
  var tmpGain = tmpCont.createGain();

  console.log(tmpCont.state);

  tmpOsci.connect(tmpGain);
  tmpGain.connect(tmpCont.destination);
  tmpOsci.frequency.value = frequency;
  // tmpOsci.type = "triangle";
  tmpOsci.type = "sine";
  tmpOsci.start(0);
  tmpObj[keyIndx] = new Array(tmpCont, tmpOsci, tmpGain, true);
}

function stopSound(keyIndx){
  // console.log(keyIndx + "stop");
  tmpObj[keyIndx][2].gain.exponentialRampToValueAtTime(0.00001, tmpObj[keyIndx][0].currentTime + 1.5 );
  tmpObj[keyIndx][1].stop(tmpObj[keyIndx][0].currentTime + 1.5);
  tmpObj[keyIndx][3] = 0;
}

document.addEventListener('keydown', (event) => {
  keyName = event.key;
  if(!(tmpObj[keyName] && tmpObj[keyName][3])){
    if(keyName==1){
      startSound(1047,keyName);
      // startSound(130.8,keyName);
    }else if(keyName==2){
      startSound(1175,keyName);
      // startSound(146.8,keyName);
    }else if(keyName==3){
      startSound(1319,keyName);
      // startSound(164.8,keyName);
    }else if(keyName==4){
      startSound(1397,keyName);
      // startSound(174.6,keyName);
    }else if(keyName==5){
      startSound(1568,keyName);
      // startSound(196.0,keyName);
    }else if(keyName==6){
      startSound(1760,keyName);
      // startSound(220.0,keyName);
    }else if(keyName==7){
      startSound(1976,keyName);
      // startSound(246.9,keyName);
    }else if(keyName==8){
      startSound(2093,keyName);
      // startSound(261.6,keyName);
    }
  }
}, false);

document.addEventListener('keyup', (event) => {
  keyName = event.key;
  if(tmpObj[keyName] && tmpObj[keyName][3]){
    stopSound(keyName);
  }  
}, false);

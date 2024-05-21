var keyName;
const tmpObj = [];
function startSound(frequency,keyIndx,typ){
  var tmpCont = new AudioContext();
  var tmpOsci = tmpCont.createOscillator();
  var tmpGain = tmpCont.createGain();

  tmpOsci.connect(tmpGain);
  tmpGain.connect(tmpCont.destination);
  tmpOsci.frequency.value = frequency;
  if (typ=="tri"){
    tmpOsci.type = "triangle";
  }else if(typ=="sin"){
    tmpOsci.type = "sine";
  }
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
  keyName = (keyName.charCodeAt(0));
  console.log(keyName);
  if(!(tmpObj[keyName] && tmpObj[keyName][3])){
    if(keyName==113){
      startSound(130.8,keyName,"tri");
    }else if(keyName==119){
      startSound(146.8,keyName,"tri");
    }else if(keyName==101){
      startSound(164.8,keyName,"tri");
    }else if(keyName==114){
      startSound(174.6,keyName,"tri");
    }else if(keyName==116){
      startSound(196.0,keyName,"tri");
    }else if(keyName==121){
      startSound(220.0,keyName,"tri");
    }else if(keyName==117){
      startSound(246.9,keyName,"tri");
    }else if(keyName==105){
      startSound(261.6,keyName,"tri");
    }
    else if(keyName==97){
      startSound(523.3,keyName,"sin");
    }else if(keyName==115){
      startSound(587.3,keyName,"sin");
    }else if(keyName==100){
      startSound(659.3,keyName,"sin");
    }else if(keyName==102){
      startSound(698.5,keyName,"sin");
    }else if(keyName==103){
      startSound(784.0,keyName,"sin");
    }else if(keyName==104){
      startSound(880.0,keyName,"sin");
    }else if(keyName==106){
      startSound(987.8,keyName,"sin");
    }else if(keyName==122){
      startSound(1047,keyName,"sin");
    }else if(keyName==120){
      startSound(1175,keyName,"sin");
    }else if(keyName==99){
      startSound(1319,keyName,"sin");
    }else if(keyName==118){
      startSound(1397,keyName,"sin");
    }else if(keyName==98){
      startSound(1568,keyName,"sin");
    }else if(keyName==110){
      startSound(1760,keyName,"sin");
    }else if(keyName==109){
      startSound(1976,keyName,"sin");
    }else if(keyName==44){
      startSound(2093,keyName,"sin");
    }
  }
}, false);

document.addEventListener('keyup', (event) => {
  keyName = event.key;
  keyName = (keyName.charCodeAt(0));
  if(tmpObj[keyName] && tmpObj[keyName][3]){
    stopSound(keyName);
  }  
}, false);

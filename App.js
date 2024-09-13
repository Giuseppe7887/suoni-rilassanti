// UI
import { View, SafeAreaView, Alert } from 'react-native';
import { stileMain, coloriTema, stileFooter } from './utils_stile.js';

// UX
import { useEffect, useState } from "react";
import { Audio, Video } from 'expo-av';
import { StatusBar } from 'expo-status-bar';
import BackgroundTimer from 'react-native-background-timer';

// components
import Riga from './components/Riga.js';
import RigaPioggia from './components/RigaPioggia.js';
import Modal from './components/Modal.js'
import Footer from './components/Footer.js';

// UX & data
import { suoni, video, vibra } from './utils.js';
import { NativeBaseProvider } from 'native-base';


let sound;
export default function App() {
  let [soundObject, setSoundObject] = useState(false);
  let [audioStatus, setAudioStatus] = useState({});
  let [current, setCurrent] = useState({ tipo: null, i: null, isPlaying: false, show: true });
  let [modalData, setModalData] = useState({ show: false });
  let [timerData, setTimerData] = useState({ minuti: 5, start: false, timing: 300 });
  let [mode, setMode] = useState("light");
  let [videos, setVideos] = useState(true);

  // manage dei suoni

  async function manageSound(tipo, i) {
    // primo play
    if (!soundObject) {
      try {
        sound = await new Audio.Sound();
        await Audio.setAudioModeAsync({ staysActiveInBackground: true })
        await sound.loadAsync(suoni[tipo][i]);
        await sound.setIsLoopingAsync(true);
      } catch (err) {
        console.log(err)
      }

      try {
        const status = await sound.playAsync();
        setSoundObject(x => x = { ...sound });
        setAudioStatus(x => x = { ...status });
        setCurrent(x => x = { ...current, tipo, i, isPlaying: true })
      } catch (err) {
        console.log(err);
      };
    };

    // mettere in pausa
    if (audioStatus.isLoaded && audioStatus.isPlaying && current.tipo === tipo && current.i === i && current.isPlaying) {
      try {
        await sound.pauseAsync();
        setCurrent(x => x = { ...current, tipo, i, isPlaying: false })
      } catch (err) {
        console.log(err)
      }
      return
    }

    // riprendere
    if (audioStatus.isLoaded && audioStatus.isPlaying && current.tipo === tipo && current.i === i && !current.isPlaying) {
      try {
        await sound.playAsync();
        setCurrent(x => x = { ...current, tipo, i, isPlaying: true })
      } catch (err) {
        console.log(err)
      }
    }

    // selzionato altro audio
    if (audioStatus.isLoaded && audioStatus.isPlaying && current.i != i || current.tipo != tipo) {
      try {
        await sound.stopAsync()
        await sound.unloadAsync();
        await sound.loadAsync(suoni[tipo][i]);
        await sound.setIsLoopingAsync(true);
        await sound.playAsync();
        setCurrent(x => x = { ...current, tipo, i, isPlaying: true })
      } catch (err) {
        console.log(err)
      }
    }
  };


  // managing del tasto play
  async function togglePlay() {
    if (current.isPlaying) {
      setCurrent({ ...current, isPlaying: false });
      try {
        await sound.pauseAsync()
      } catch (err) { console.log(err) }
    } else if (audioStatus.isLoaded) {
      setCurrent({ ...current, isPlaying: true });
      try {
        await sound.playAsync()
      } catch (err) { console.log(err) }
    } else {
      Alert.alert("Nessun audio selezionato", "Devi selezionare un audio dal menù")
    }
  }

  // ferma intervallo tempo

  async function stopInterval() {
    BackgroundTimer.stopBackgroundTimer();
    setTimerData({ minuti: 5, timing: 300, start: false });
  }


  // cambia valore ogni secondo

  async function changeValue() {
    console.log("clock");

    setTimerData(x => x = { ...timerData, start: true, timing: timerData.timing-- });
  }

  function manageTimer(cmd) {
    vibra(50)
    if (cmd === "start") {
      setTimerData(x => x = { ...timerData, timing: 300, start: true });
      setModalData({ ...modalData, show: false })
      BackgroundTimer.runBackgroundTimer(changeValue, 1000);

    } else {
      stopInterval();
    }
  }

  // controllo intervallo ogni volta che arriva a 0
  useEffect(() => {
    async function stopAudio() {
      if (audioStatus.isLoaded && audioStatus.isPlaying) {
        try {
          await sound.stopAsync();
        } catch (err) {
          console.log(err);
        };
      };
    }
    if (BackgroundTimer != null) {
      try{
        BackgroundTimer?.start();

      }catch(_){

      }
    }
    if (timerData.timing === 0) {
      stopAudio();
      if (BackgroundTimer != null) {
        BackgroundTimer?.stopBackgroundTimer();

      }
      setTimerData({ minuti: 5, timing: 300, start: false });
      setCurrent({ tipo: null, i: null, isPlaying: false, show: true });

    }

    try{
      if (BackgroundTimer != null) {
        BackgroundTimer?.stop();
  
      }

    }catch(_){

    }
   
  }, [timerData.timing])


  return (
    <NativeBaseProvider>
      <SafeAreaView style={{ ...stileMain.container, backgroundColor: coloriTema[mode].background }}>
        {current.show && current.tipo && videos &&
          <Video
            source={video[current.tipo]}
            shouldPlay
            isMuted
            resizeMode='cover'
            style={{ width: "100%", height: "100%", position: "absolute", bottom: "10%" }}
            isLooping
          />}
        <View style={{ ...stileMain.centro }}>
          <Riga current={current} icona={"hair-dryer"} tipo="phon" manageSound={manageSound} />
          <Riga current={current} icona={"waves"} tipo="mare" manageSound={manageSound} />
          <RigaPioggia current={current} icona={"rainy"} tipo="pioggia" manageSound={manageSound} />
        </View>
        {!modalData.show ? <Footer setMode={setMode} togglePlay={togglePlay} current={current} mode={mode} timerData={timerData} setModalData={setModalData} modalData={modalData} setVideos={setVideos} videos={videos} /> : <View style={{ ...stileFooter.placeHolder, backgroundColor: coloriTema[mode].footer }}></View>}
        <Modal mode={mode} modalData={modalData} timerData={timerData} setModalData={setModalData} setTimerData={setTimerData} manageTimer={manageTimer} />
        <StatusBar style='auto' />
      </SafeAreaView >
    </NativeBaseProvider>
  );
};
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Button } from 'react-native';
import {Audio} from 'expo-av'
import { useState } from 'react';

export default function App() {

  const [rec,setrec] = useState()
  const [frec ,setfrec] =useState()
 async function start()
  {
    try{
     const perms = await Audio.requestPermissionsAsync()
     if(perms.status =="granted")
     {
      await Audio.setAudioModeAsync({
        allowsRecordingIOS:true,
        playsInSilentModeIOS:true
      })
      const {rec} = await Audio.Recording.createAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
      setrec(rec)
     }
    }
    catch(err)
    {

    }
  }
 async function stop()
  {
     await rec.stopAndUnloadAsync()
     let finalrec = [rec];
     const {sound , status} = await rec.createNewLoadedSoundAsync();

     finalrec.push({
      sound:sound,
      duration:getdurformatted(status.durationMillis),
      file:rec.getURI()
     })
     setfrec(finalrec)

  }
  function getdurformatted(milli)
  {
   const min  = milli /1000/60
   const sec  = Math.round((min - Math.floor(min))*60)
  }
  function getrec()
  {

  }
 function clearrec()
  {

  }


  return (

    <View style={styles.container}>
      <Button title={rec ? 'Start' :'Stop'} onPress={rec ? stop : start}></Button>
      {getrec()}
      
      <Button title={rec ? 'Clear' :'here'} onPress={clearrec}></Button>
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    padding:'10px',
    flexDirection:'row',
    
  },
});

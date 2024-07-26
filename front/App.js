import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { Audio } from 'expo-av';
import { useState } from 'react';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default function App() {
  const [rec, setRec] = useState(null);
  const [recordingData, setRecordingData] = useState(null);

  async function start() {
    try {
      const { status } = await Audio.requestPermissionsAsync();
      if (status === 'granted') {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });
        const recording = new Audio.Recording();
        await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
        await recording.startAsync();
        setRec(recording);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function stop() {
    try {
      await rec.stopAndUnloadAsync();
      const { sound, status } = await rec.createNewLoadedSoundAsync();
      const duration = getDurFormatted(status.durationMillis);

      setRecordingData({
        sound: sound,
        duration: duration,
        file: rec.getURI(),
      });

      setRec(null); 
    } catch (err) {
      console.log(err);
    }
  }

  function getDurFormatted(milli) {
    const min = Math.floor(milli / 1000 / 60);
    const sec = Math.round((milli / 1000) % 60);
    return sec < 10 ? `${min}:0${sec}` : `${min}:${sec}`;
  }

  function getRecording() {
    if (recordingData) {
      return (
        <View style={styles.recording}>
          <Text style={styles.recordingText}>Recording</Text>
          <Text style={styles.recordingText}>Duration: {recordingData.duration}</Text>
          <TouchableOpacity onPress={() => recordingData.sound.replayAsync()}>
            <MaterialIcons name="play-arrow" size={40} color="white" />
          </TouchableOpacity>
        </View>
      );
    }
    return null;
  }

  function clearRec() {
    setRecordingData(null);
  }

  return (
    <ImageBackground source={require('./ha.jpg')} style={styles.background}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.recordButton}
          onPress={rec ? stop : start}
        >
          {rec ? (
            <FontAwesome name="stop" size={50} color="red" />
          ) : (
            <FontAwesome name="microphone" size={50} color="white" />
          )}
        </TouchableOpacity>
        {getRecording()}
        <TouchableOpacity
          style={styles.clearButton}
          onPress={clearRec}
        >
          <Text style={styles.clearButtonText}>Clear</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  recordButton: {
    marginBottom: 20,
  },
  clearButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  clearButtonText: {
    color: 'white',
    fontSize: 16,
  },
  recording: {
    margin: 10,
    alignItems: 'center',
  },
  recordingText: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
    backgroundColor:'black'
  },
});

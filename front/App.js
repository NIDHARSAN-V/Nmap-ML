// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
// import { Audio } from 'expo-av';
// import { useState } from 'react';
// import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

// export default function App() {
//   const [rec, setRec] = useState(null);
//   const [recordingData, setRecordingData] = useState(null);

//   async function start() {
//     try {
//       const { status } = await Audio.requestPermissionsAsync();
//       if (status === 'granted') {
//         await Audio.setAudioModeAsync({
//           allowsRecordingIOS: true,
//           playsInSilentModeIOS: true,
//         });
//         const recording = new Audio.Recording();
//         await recording.prepareToRecordAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);
//         await recording.startAsync();
//         setRec(recording);
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   async function stop() {
//     try {
//       await rec.stopAndUnloadAsync();
//       const { sound, status } = await rec.createNewLoadedSoundAsync();
//       const duration = getDurFormatted(status.durationMillis);

//       setRecordingData({
//         sound: sound,
//         duration: duration,
//         file: rec.getURI(),
//       });

//       setRec(null); 
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   function getDurFormatted(milli) {
//     const min = Math.floor(milli / 1000 / 60);
//     const sec = Math.round((milli / 1000) % 60);
//     return sec < 10 ? `${min}:0${sec}` : `${min}:${sec}`;
//   }

//   function getRecording() {
//     if (recordingData) {
//       return (
//         <View style={styles.recording}>
//           <Text style={styles.recordingText}>Recording</Text>
//           <Text style={styles.recordingText}>Duration: {recordingData.duration}</Text>
//           <TouchableOpacity onPress={() => recordingData.sound.replayAsync()}>
//             <MaterialIcons name="play-arrow" size={40} color="white" />
//           </TouchableOpacity>
//         </View>
//       );
//     }
//     return null;
//   }

//   function clearRec() {
//     setRecordingData(null);
//   }

//   return (
//     <ImageBackground source={require('./ha.jpg')} style={styles.background}>
//       <View style={styles.container}>
//         <TouchableOpacity
//           style={styles.recordButton}
//           onPress={rec ? stop : start}
//         >
//           {rec ? (
//             <FontAwesome name="stop" size={50} color="red" />
//           ) : (
//             <FontAwesome name="microphone" size={50} color="white" />
//           )}
//         </TouchableOpacity>
//         {getRecording()}
//         <TouchableOpacity
//           style={styles.clearButton}
//           onPress={clearRec}
//         >
//           <Text style={styles.clearButtonText}>Clear</Text>
//         </TouchableOpacity>
//         <StatusBar style="auto" />
//       </View>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     resizeMode: 'cover',
//   },
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 10,
//   },
//   recordButton: {
//     marginBottom: 20,
//   },
//   clearButton: {
//     marginTop: 20,
//     padding: 10,
//     backgroundColor: 'red',
//     borderRadius: 5,
//   },
//   clearButtonText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   recording: {
//     margin: 10,
//     alignItems: 'center',
//   },
//   recordingText: {
//     fontSize: 18,
//     marginBottom: 10,
//     color: 'white',
//     backgroundColor:'black'
//   },
// });




// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
// import { useState } from 'react';
// import * as Speech from 'expo-speech';
// import { FontAwesome } from '@expo/vector-icons';

// export default function App() {
//   const [recognizing, setRecognizing] = useState(false);
//   const [recognizedText, setRecognizedText] = useState('');

//   async function startRecognition() {
//     try {
//       setRecognizing(true);
//       Speech.start('Start speaking...', {
//         onDone: (result) => {
//           setRecognizedText(result);
//           setRecognizing(false);
//         },
//         onError: (err) => {
//           console.log(err);
//           setRecognizing(false);
//         },
//       });
//     } catch (err) {
//       console.log(err);
//       setRecognizing(false);
//     }
//   }

//   async function stopRecognition() {
//     try {
//       Speech.stop();
//       setRecognizing(false);
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   function clearRecognition() {
//     setRecognizedText('');
//   }

//   return (
//     <ImageBackground source={require('./ha.jpg')} style={styles.background}>
//       <View style={styles.container}>
//         <TouchableOpacity
//           style={styles.recordButton}
//           onPress={recognizing ? stopRecognition : startRecognition}
//         >
//           {recognizing ? (
//             <FontAwesome name="stop" size={50} color="red" />
//           ) : (
//             <FontAwesome name="microphone" size={50} color="white" />
//           )}
//         </TouchableOpacity>
//         {recognizedText ? (
//           <View style={styles.recognition}>
//             <Text style={styles.recognitionText}>Recognized Text:</Text>
//             <Text style={styles.recognitionText}>{recognizedText}</Text>
//           </View>
//         ) : null}
//         <TouchableOpacity
//           style={styles.clearButton}
//           onPress={clearRecognition}
//         >
//           <Text style={styles.clearButtonText}>Clear</Text>
//         </TouchableOpacity>
//         <StatusBar style="auto" />
//       </View>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     resizeMode: 'cover',
//   },
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 10,
//   },
//   recordButton: {
//     marginBottom: 20,
//   },
//   clearButton: {
//     marginTop: 20,
//     padding: 10,
//     backgroundColor: 'red',
//     borderRadius: 5,
//   },
//   clearButtonText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   recognition: {
//     margin: 10,
//     alignItems: 'center',
//   },
//   recognitionText: {
//     fontSize: 18,
//     marginBottom: 10,
//     color: 'white',
//     backgroundColor: 'black'
//   },
// });


// import React, { useState, useEffect } from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
// import Voice from 'react-native-voice';
// import { FontAwesome } from '@expo/vector-icons';

// export default function App() {
//   const [recognizedText, setRecognizedText] = useState('');
//   const [isListening, setIsListening] = useState(false);

//   useEffect(() => {
//     Voice.onSpeechResults = onSpeechResults;
//     Voice.onSpeechEnd = onSpeechEnd;

//     return () => {
//       Voice.destroy().then(Voice.removeAllListeners);
//     };
//   }, []);

//   const onSpeechResults = (event) => {
//     const result = event.value[0];
//     setRecognizedText(result);
//   };

//   const onSpeechEnd = () => {
//     setIsListening(false);
//     Voice.start('en-US'); // Optionally restart listening
//   };

//   const startListening = async () => {
//     setIsListening(true);
//     try {
//       await Voice.start('en-US');
//     } catch (error) {
//       console.error('Error starting Voice:', error);
//     }
//   };

//   const stopListening = async () => {
//     setIsListening(false);
//     try {
//       await Voice.stop();
//     } catch (error) {
//       console.error('Error stopping Voice:', error);
//     }
//   };

//   const clearRecognition = () => {
//     setRecognizedText('');
//   };

//   return (
//     <ImageBackground source={require('./ha.jpg')} style={styles.background}>
//       <View style={styles.container}>
//         <TouchableOpacity
//           style={styles.recordButton}
//           onPress={isListening ? stopListening : startListening}
//         >
//           {isListening ? (
//             <FontAwesome name="stop" size={50} color="red" />
//           ) : (
//             <FontAwesome name="microphone" size={50} color="white" />
//           )}
//         </TouchableOpacity>
//         {recognizedText ? (
//           <View style={styles.recognition}>
//             <Text style={styles.recognitionText}>Recognized Text:</Text>
//             <Text style={styles.recognitionText}>{recognizedText}</Text>
//           </View>
//         ) : null}
//         <TouchableOpacity
//           style={styles.clearButton}
//           onPress={clearRecognition}
//         >
//           <Text style={styles.clearButtonText}>Clear</Text>
//         </TouchableOpacity>
//       </View>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     resizeMode: 'cover',
//   },
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 10,
//   },
//   recordButton: {
//     marginBottom: 20,
//   },
//   clearButton: {
//     marginTop: 20,
//     padding: 10,
//     backgroundColor: 'red',
//     borderRadius: 5,
//   },
//   clearButtonText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   recognition: {
//     margin: 10,
//     alignItems: 'center',
//   },
//   recognitionText: {
//     fontSize: 18,
//     marginBottom: 10,
//     color: 'white',
//     backgroundColor: 'black',
//   },
// });




// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import Voice from '@react-native-voice/voice';

// const App = () => {
//   const [res, setres] = useState("");
//   const [err, seterr] = useState("");
//   const [isrec, setisrec] = useState(false);

//   // Use arrow functions for event handlers
//   Voice.onSpeechStart = () => {
//     setisrec(true);
//   };

//   Voice.onSpeechEnd = () => {
//     setisrec(false);
//   };

//   Voice.onSpeechError = (error) => {
//     seterr(error.error.message || "An error occurred");
//   };

//   Voice.onSpeechResults = (result) => {
//     setres(result.value[0]);
//   };

//   // Use arrow functions for async functions
//   const start = async () => {
//     try {
//       await Voice.start('en-US');
//     } catch (error) {
//       seterr(error.message || "An error occurred");
//     }
//   };

//   const stop = async () => {
//     try {
//       await Voice.stop();
//     } catch (error) {
//       seterr(error.message || "An error occurred");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Voice Input</Text>
//       <Text>{res}</Text>
//       <Text>{err}</Text>
//       <TouchableOpacity onPress={isrec ? stop : start} style={styles.button}>
//         <Text>{isrec ? 'Stop Rec' : 'Start Rec'}</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   text: {
//     fontSize: 20,
//     color: '#000',
//   },
//   button: {
//     marginTop: 20,
//     padding: 10,
//     backgroundColor: '#007BFF',
//     borderRadius: 5,
//   },
// });

// export default App;




import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Voice from '@react-native-community/voice';

class App extends React.Component {
  state = { state: 'none', listening: false, result: null }

  componentDidMount () {
    Voice.onSpeechStart = this.onSpeechStartHandler;
    Voice.onSpeechEnd = this.onSpeechEndHandler;
    Voice.onSpeechResults = this.onSpeechResultsHandler;
    const itvl = setInterval(async () => {
      const {listening} = this.state;
      console.log('Recognizing? ', listening, await Voice.isRecognizing())
      if (listening && !(await Voice.isRecognizing())) {
        await Voice.start('en-US');
      }
    }, 2000);
    this.setState({
      itvl
    });
  }

  componentWillUnmount () {
    clearInterval(this.state.itvl);
    Voice.removeAllListeners();
  }

  onSpeechStartHandler = () => {
    console.log('start speech...');
  };

  onSpeechEndHandler = async () => {
    console.log('End speech...');
  };

  onSpeechResultsHandler = data => {
    const {status} = this.state;
    console.log('data ::::', data);
    console.log('status ::::', {status})
    if (data.value[0] === 'down pat') {
      this.setState({status: 'waiting_command'});
    }
    if (status === 'waiting_command') {
      const commands = ['play', 'pause', 'stop', 'next'];
      if (commands.find(val => val === data.value[0])) {
        this.setState({status: 'command_found', result: data.value[0]});

        setTimeout(() => {
          this.setState({status: 'none'});
        }, 5000)
      }
    }
  };

  onStartButtonPress = async e => {
    const {listening} = this.state;
    if (!listening) {
      this.setState({listening: true});
      await Voice.start('en-US');
    } else {
      this.setState({status: 'none', listening: false});
      await Voice.stop();
    }
    console.log(!listening ? 'listening...' : 'not listening...');
  };

  render() {
    const {status, listening, result} = this.state;
    return (
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            {/* <Header /> */}
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
              {/* <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Step One</Text>
                <Text style={styles.sectionDescription}>
                  Edit <Text style={styles.highlight}>App.js</Text> to change this
                  screen and then come back to see your edits.
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>See Your Changes</Text>
                <Text style={styles.sectionDescription}>
                  <ReloadInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Debug</Text>
                <Text style={styles.sectionDescription}>
                  <DebugInstructions />
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Learn More</Text>
                <Text style={styles.sectionDescription}>
                  Read the docs to discover what to do next:
                </Text>
              </View>
              <LearnMoreLinks /> */}
              <TouchableOpacity onPress={this.onStartButtonPress}>
                <Text style={styles.start}>
                  {!listening ? 'Start...' : 'Stop'}
                </Text>
              </TouchableOpacity>
              <Text style={styles.txt}>Status: {listening ? 'Listening' : 'Stopped'}</Text>
              {listening && <View>
                <Text style={styles.txt}>Status: {status}</Text>
                {status === 'waiting_command' && <Text style={styles.txt}>Commands: play, next, stop, pause</Text>}
                {status === 'command_found' && <Text style={styles.txt}>Command: {result}</Text>}
              </View>}
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
};

const styles = StyleSheet.create({
  start: {
    fontSize: 25,
    padding: 20,
    width: Dimensions.get('window').width,
  },
  txt: {
    fontSize: 15,
    padding: 10,
    paddingLeft: 20,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
    padding: 20,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
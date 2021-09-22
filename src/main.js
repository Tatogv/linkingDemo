import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Image,
  TextInput,
  Text,
  Pressable,
  Linking,
  View,
} from 'react-native';
import styles from './styles';

const openLink = async link => {
  try {
    // Returns a promise that determines whether or
    // not an installed app can handle a given URL.
    const canOpenUrl = await Linking.canOpenURL(link);
    console.log(canOpenUrl);
    // Tries to open the given URL
    if (canOpenUrl) Linking.openURL(link);
    else alert("Can't open that!");
  } catch (error) {
    alert(error);
  }
};

const App = () => {
  const [inputText, setInputText] = useState('boattrader://settings');

  const handleUrl = ({url}) => alert(`Opened with Deep Link: ${url}`);

  useEffect(() => {
    const setDeepLinkListeners = async () => {
      // For when the app is already opened
      Linking.addEventListener('url', handleUrl);
      // For when the app is launched by a Deep Link
      const url = await Linking.getInitialURL();
      if (url) handleUrl({url});
    };
    setDeepLinkListeners();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Linking App</Text>
        <Image
          style={styles.logo}
          source={require('../assets/logo.png')}
          resizeMode={'contain'}
        />
      </View>
      <TextInput
        style={styles.textInput}
        value={inputText}
        onChangeText={setInputText}
        autoCapitalize={'none'}
      />
      <Pressable
        style={styles.button}
        onPress={() => openLink(inputText)}
        android_ripple={{color: '#01579b'}}>
        <Text style={styles.buttonText}>OPEN LINK</Text>
      </Pressable>
    </View>
  );
};

export default App;

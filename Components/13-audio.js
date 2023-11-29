import * as React from 'react';
import { Text, View, StyleSheet, Button, ToastAndroid } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {
  const [sound, setSound] = React.useState();

  async function handlePlay() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync({
      uri: 'https://ia600302.us.archive.org/7/items/MerryChristmasMrLawrence_177/MerryChristmasMr_lawrence-originalVersion.mp3',
    });
    setSound(sound);
    ToastAndroid.show('Playing Sound', ToastAndroid.SHORT);
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          ToastAndroid.show('Stop Sound', ToastAndroid.SHORT);
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const handleStop = async () => {
    if (sound) {
      ToastAndroid.show('Stop Sound', ToastAndroid.SHORT);
      await sound.unloadAsync();
    }
  };
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center', fontSize: 25 }}>
        Ryuichi Sakamoto -Merry Christmas Mr.Lawrence
      </Text>
      <View style={{ height: 40 }} />
      <Button title="Play Sound" onPress={handlePlay} />
      <View style={{ height: 40 }} />
      <Button title="Stop Sound" onPress={handleStop} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
});

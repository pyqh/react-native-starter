import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import logo from '../assets/gdou.png';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ alignItems: 'center', flexDirection: 'row' }}>
        <Image source={logo} style={{ height: 80, width: 80 }} />
        <Text style={{ fontSize: 20, marginLeft: 10 }}>广学明德,海纳厚为</Text>
      </View>
      <View>
        <Text style={{ fontSize: 20, marginTop: 40 }}>Hello,World!</Text>
        <TouchableOpacity
          onPress={() => alert('Hello, world!')}
          style={{ backgroundColor: 'blue' }}
        >
          <Text style={{ fontSize: 20, color: '#fff' }}>Pick a photo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

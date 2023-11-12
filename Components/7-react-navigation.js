import { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function UserScreen({ route, navigation }) {
  const { username } = route.params || {};
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {username ? (
        <Text>Welcome, {username}</Text>
      ) : (
        <>
          <Text>You are not logged in yet </Text>
          <Button
            title="Go to Login"
            onPress={() => navigation.navigate('Login')}
          />
        </>
      )}
    </View>
  );
}
function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const handleLogin = () => {
    navigation.navigate('User', {
      username,
    });
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>input your username</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="User">
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

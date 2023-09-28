import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import Welcome from './screens/Welcome';
import Spot from './screens/Spot';

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown: false}}>
        <stack.Screen name="Welcome" component={Welcome} />
        <stack.Screen name="Home" component={Home} />
        
        <stack.Screen name="Spot" component={Spot} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

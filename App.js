import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/Home';
import IntroScreen from './pages/Slider';
import Login from './pages/Inicio'; // Página após o slider
import Cadastrei from './pages/Cadastro';
import Filtro from './pages/Filtro';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Slider" component={IntroScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastrei} />
        <Stack.Screen name="Filtro" component={Filtro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

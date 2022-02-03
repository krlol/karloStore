import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { StatusBar } from 'react-native';
import GlobalStackNavigator from 'navigation/global-navigation';

export default function App() {
  return <NavigationContainer> 
      <StatusBar translucent/>
      <GlobalStackNavigator />
    </NavigationContainer>
}

import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { StatusBar } from 'react-native';
import GlobalStackNavigator from 'navigation/global-navigation';
import Config from "react-native-config";
import FakeApiProvider from 'services/FakeApiProvider';

export default function App() {

  FakeApiProvider.setBaseUrl(Config.BASE_URL);

  return <NavigationContainer> 
      <StatusBar translucent/>
      <GlobalStackNavigator />
    </NavigationContainer>
}

import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import TabNavigator from './tab-navigation'

const Stack = createStackNavigator()

const GlobalStackNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Main' component={TabNavigator} />
    </Stack.Navigator>
)
  
export default GlobalStackNavigator
  
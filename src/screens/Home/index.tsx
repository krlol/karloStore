import React from 'react';
import { Text, View } from 'react-native';
import { Strings } from 'utils/strings';

export default function Home() {
  return (
    <View><Text>{`${Strings.Home} ${Strings.Screen}`}</Text></View>
  )
}

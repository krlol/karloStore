import React from 'react';
import { Text, View } from 'react-native';
import { Strings } from 'utils/strings';

export default function ProductDetail() {
  return (
    <View><Text>{`${Strings.Detail} ${Strings.Screen}`}</Text></View>
  )
}

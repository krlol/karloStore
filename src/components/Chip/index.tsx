import React from 'react';
import { Text, View } from 'react-native';
import { Strings } from 'utils/strings';
import styles from './styles';

export interface ChipProps {
  backgroundColor: string
  title:string
  style?: object
  textStyle?: object
}

export default function Chip(props:ChipProps) {
  return (
    <View style={[styles.chip, props.style, {backgroundColor:props.backgroundColor}]}>
      <Text style={[styles.label,props.textStyle]}>{props.title}</Text>
    </View>
  )
}

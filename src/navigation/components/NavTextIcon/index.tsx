import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

interface TextIconProps {
    iconValue: number;
}

export default function NavTextIcon(props:TextIconProps) {
  return (
    <View style={styles.container}><Text style={styles.label}>{`${props.iconValue}`}</Text></View>
  )
}

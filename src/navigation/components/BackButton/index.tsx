import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { BackButtonIcon } from '../../../images';
import styles from './styles';

interface BackButtonProps {
    navigation?:any
}

export default function BackButton(props:BackButtonProps) {
  return (
    <TouchableOpacity style={styles.buttonIcon} onPress={()=>{
      props.navigation && props.navigation.goBack()
    }}>
      <BackButtonIcon />
    </TouchableOpacity>
  )
}

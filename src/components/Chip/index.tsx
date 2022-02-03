import React from 'react';
import { Text, View } from 'react-native';
import SkeletonContent from 'react-native-skeleton-content-nonexpo';
import { ICustomViewStyle } from 'react-native-skeleton-content-nonexpo/lib/Constants';
import styles from './styles';

export interface ChipProps {
  backgroundColor: string
  title:string
  style?: object
  textStyle?: object
}

const loadingChipLayout:ICustomViewStyle[] = [{width:100,height:30,marginRight:10,borderRadius:10}];

export const LoadingChip = () => {
  return <SkeletonContent layout={loadingChipLayout} isLoading={true} />
}

export default function Chip(props:ChipProps) {
  return (
    <View style={[styles.chip, props.style, {backgroundColor:props.backgroundColor}]}>
      <Text style={[styles.label,props.textStyle]}>{props.title}</Text>
    </View>
  )
}

import React, { useState, useRef } from 'react'
import { TextInput, TextInputProps, View } from 'react-native'
import styles from './styles'

export interface SearchBarProps extends TextInputProps {
  onSubmit: (value: string) => void
  handleOnChange?: (value: string) => void
  containerStyle?: object
  textStyle?: object
}

export default function SearchBar(props:SearchBarProps) {
  return (<View style={[styles.inputContainer, props.containerStyle]}>
      <TextInput
        {...props}
        numberOfLines={1}
        style={[styles.input, props.textStyle]}
      />
  </View>)
}

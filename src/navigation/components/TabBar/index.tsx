import React from 'react'
import { SafeAreaView, TouchableOpacity, View } from 'react-native'
import { Colors } from 'utils/colors'
import styles from './styles'

const TabBar = ({ state, descriptors, navigation }: any) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {state.routes.map((route: any, index: any) => {
          const { options } = descriptors[route.key]

          const isFocused = state.index === index

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            })

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name)
            }
          }

          return (
            <TouchableOpacity
              accessibilityRole='button'
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              style={!isFocused ? styles.tabButton : [styles.tabButton, {backgroundColor:Colors.FourthColor}]}
              key={route.name}>
              {options.tabBarIcon && options.tabBarIcon({ focused: isFocused, size: 20 })}</TouchableOpacity>
          )
        })}
      </View>
    </SafeAreaView>
  )
}

export default TabBar

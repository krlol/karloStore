import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import styles from './styles'

const TabBar = ({ state, descriptors, navigation }: any) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {state.routes.map((route: any, index: any) => {
          const { options } = descriptors[route.key]
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name

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
              style={styles.tabButton}
              key={route.name}>
              {options.tabBarIcon && options.tabBarIcon({ focused: isFocused, size: 20 })}
              <Text style={[styles.tabLabel]}>{label}</Text>
            </TouchableOpacity>
          )
        })}
      </View>
    </SafeAreaView>
  )
}

export default TabBar

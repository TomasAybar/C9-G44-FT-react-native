import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

export const Linkeo = ({ onPress, children }) => (
  <TouchableOpacity onPress={onPress}>
    <Text
      style={{
        color: 'rgba(255,255,255,0.5)',
        textDecorationLine: 'underline'
      }}
    >
      {children}
    </Text>
  </TouchableOpacity>
)

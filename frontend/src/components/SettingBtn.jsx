import React from 'react'
import { Pressable, StyleSheet, useWindowDimensions, View } from 'react-native'
import StyledText from '../styledComponents/StyledText'
import { SettingsCompras } from './icons/SettingsCompras'

export const SettingBtn = ({ text = 'Ejemplo' }) => {
  const { width } = useWindowDimensions()

  return (
    <Pressable
      style={{ alignItems: 'flex-end' }}
      onPress={() => alert('Recientes')}
    >
      <View style={styles.containerRecientes}>
        <StyledText weight500 size14>
          {text}
        </StyledText>
        <SettingsCompras style={{ marginStart: 10 }} />
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  containerRecientes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
    // right: 0,
    // marginEnd: 1,
  }
})

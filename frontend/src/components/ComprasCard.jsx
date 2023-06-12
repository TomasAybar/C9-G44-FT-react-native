import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import StyledText from '../styledComponents/StyledText'

export const ComprasCard = ({ img, name, price }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: img }}
        style={{ width: 127, height: 104, borderRadius: 12 }}
      />
      <View style={styles.containerText}>
        <StyledText left size12>
          {name}
        </StyledText>
        <StyledText left size16 weight700>
          ${price}.-
        </StyledText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 25
  },
  containerText: {
    marginStart: 30,
    alignItems: 'flex-start'
  }
})

import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, useWindowDimensions, View } from 'react-native'
import SyledButton from '../../../styledComponents/StyledButton'
import StyledView from '../../../styledComponents/StyledView'
import StyledText from '../../../styledComponents/StyledText'
import { Slider66 } from '../../../components/icons/Slider6-6'
import { PublicationCard } from '../../../components/PublicationCard'
import { useVenderStore } from '../../../store/venderStore'

export const CheckeoFinalScreen = () => {
  const { width, height } = useWindowDimensions()
  const navigator = useNavigation()

  const data = useVenderStore((state) => state.product)

  const btnPublicar = () => {
    navigator.navigate('CongratsScreen')

    // mandar estos datos al backend
    console.log(data)

    console.log('mandar estos datos al backend')
  }

  return (
    <StyledView dark container height100>
      <View
        style={{
          ...styles.containerSlide,

          height: height * 0.1
        }}
      >
        <Slider66 />
      </View>

      <View style={styles.containerText}>
        <StyledText>
          Dale un último vistazo y si esta correcto, ¡Listo!
        </StyledText>
        <StyledText>a publicar</StyledText>
      </View>

      <PublicationCard
        img={data.image}
        price={data.profit}
        size={data.size}
        name={data.description}
      />

      <View
        style={{
          ...styles.containerBtn,
          width: width * 1
        }}
      >
        <SyledButton
          white
          title='Publicar'
          onPress={btnPublicar}
        />
      </View>
    </StyledView>
  )
}

const styles = StyleSheet.create({
  containerSlide: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30
  },

  containerOptions: {},
  containerBtn: {
    position: 'absolute',
    bottom: 80,
    paddingHorizontal: 25
  },
  containerText: {
    marginBottom: 20
  }
})

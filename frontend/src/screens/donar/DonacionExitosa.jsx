import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import StyledText from '../../styledComponents/StyledText'
import StyledView from '../../styledComponents/StyledView'
import StyledButton from '../../styledComponents/StyledButton'
import { BuySteps } from '../../components/BuySteps'
import { Image } from 'react-native'

export const DonacionExitosa = () => {
  const navigator = useNavigation()

  const [completed, setCompleted] = useState(false)

  useEffect(() => {
    setTimeout(() => setCompleted(true), 1500)
  }, [])

  return (
    <StyledView dark height100>
      {completed
        ? (
          <StyledView
            position='absolute'
            height100
            width100
            zIndex={10}
            marginTop={55}
          >
            <StyledView
              marginTop={70}
              grey
              marginHorizontal={25}
              borderRadius={16}
              padding={20}
            >
              <Image
                source={require('../../../assets/icons/loader-completed.png')}
                alignSelf='center'
                marginVertical={5}
              />
              <StyledText size16 weight700 marginVertical={15}>
                ¡Muchas gracias!
              </StyledText>
              <StyledText width={210} opacity={0.8} lineHeight={20}>
                Con tu donación ayudas a muchas personas.
              </StyledText>
              <StyledView marginTop={30}>
                <StyledButton
                  white
                  width='90%'
                  marginBottom={12}
                  alignSelf='center'
                  title='Ver detalle'
                  onPress={() => navigator.navigate('ArticuloPublicadoDonar')}
                />
                <StyledButton
                  black
                  backgroundColor='transparent'
                  width='90%'
                  alignSelf='center'
                  title='Volver al inicio'
                  onPress={() => navigator.navigate('HomeScreen')}
                />
              </StyledView>
            </StyledView>
          </StyledView>
          )
        : (
          <StyledView
            position='absolute'
            height100
            width100
            zIndex={10}
            marginTop={55}
          >
            <StyledView
              marginTop={70}
              grey
              marginHorizontal={25}
              borderRadius={16}
              padding={20}
            >
              <StyledText size16 weight700 marginVertical={10}>
                Preparando Publicación
              </StyledText>
              <Image
                source={require('../../../assets/icons/loader.png')}
                alignSelf='center'
                marginVertical={10}
              />
              <StyledButton
                white
                width='90%'
                marginVertical={20}
                alignSelf='center'
                title='Cancelar'
                onPress={() => navigator.goBack()}
              />
            </StyledView>
          </StyledView>
          )}
    </StyledView>
  )
}

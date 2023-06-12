import React from 'react'
import {
  Image,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  View
  , LogBox
} from 'react-native'
import StyledView from '../../styledComponents/StyledView'
import StyledText from '../../styledComponents/StyledText'
import StyledButton from '../../styledComponents/StyledButton'
import { Slider16 } from '../../components/icons/Slider1-6'
import theme from '../../themes/theme'
import { AddCircle } from '../../components/icons/AddCircle'

import { useVender } from '../../hooks/useVender'

LogBox.ignoreLogs([
  'Key "cancelled" in the image picker result is deprecated and will be removed in SDK 48, use "canceled" instead'
])

export const FotoProductoScreen = () => {
  const { width, height } = useWindowDimensions()
  const { imageUri, handleChoosePhoto, nextButtonFotoProduct } = useVender()

  return (
    <StyledView dark>
      <StyledView container height={height * 1}>
        <View style={styles.containerMain}>
          <View
            style={{
              ...styles.containerSlide,
              height: height * 0.1
            }}
          >
            <Slider16 />
          </View>

          <View
            style={{
              ...styles.center,
              height: height * 0.15
            }}
          >
            <StyledText size14 weight600 marginBottom={10}>
              Subi fotos de la prenda.
            </StyledText>

            <StyledText size14 marginBottom={20}>
              Podras cargar hasta 5 imagenes.
            </StyledText>
          </View>

          <View
            style={{
              ...styles.center,
              marginBottom: 15
            }}
          >
            <View>
              {imageUri
                ? (
                  <Image
                    source={{ uri: imageUri }}
                    style={{
                      width: width * 0.6,
                      height: height * 0.3
                    }}
                  />
                  )
                : (
                  <View
                    style={{
                      ...styles.image,
                      height: height * 0.3,
                      width: width * 0.6
                    }}
                  />
                  )}
            </View>
          </View>

          <Pressable
            onPress={handleChoosePhoto}
            style={{
              ...styles.center,
              marginBottom: 30
            }}
          >
            <AddCircle />
          </Pressable>
        </View>

        <View style={styles.containerBtn}>
          <StyledButton
            white
            title='Siguiente'
            onPress={nextButtonFotoProduct}
          />
        </View>
      </StyledView>
    </StyledView>
  )
}

const styles = StyleSheet.create({
  containerText: {
    marginBottom: 2
  },
  containerSlide: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerImage: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    backgroundColor: theme.colors.yellowPrimary,
    width: '70%',
    borderRadius: 16
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerBtn: {},
  containerMain: {
    marginBottom: 10
  }
})

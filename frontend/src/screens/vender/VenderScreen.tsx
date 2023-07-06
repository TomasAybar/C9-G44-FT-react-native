import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, useWindowDimensions, View, Text } from 'react-native'
import { CameraDonar } from '../../components/icons/CameraDonar'
import { MaginPenDonar } from '../../components/icons/MaginPenDonar'
import { Dollar } from '../../components/icons/Dollar'
import StyledView from '../../styledComponents/StyledView'
import StyledText from '../../styledComponents/StyledText'
import SyledButton from '../../styledComponents/StyledButton'
import { OnboardingButton } from '../../components/buttons/OnboardingButton'
import theme from '../../themes/theme'

export const VenderScreen = () => {
  const { width, height } = useWindowDimensions()
  const navigator = useNavigation()

  return (
    <View style={{ backgroundColor: theme.colors.appBackground, flex: 1, paddingHorizontal: 20 }}>
      <View
        style={{
          ...style.containerHeader,
          // height: height * 0.1
        }}
      >
        <Text style={{ color: '#fff', fontWeight: '700', fontSize: 16, textAlign: 'center', lineHeight: 32 }}>
          Vendé eso que ya no usas.{'\n'}¡Publicar es muy facil!
        </Text>
      </View>

      <View>
        <View
          style={{
            ...style.contenedorCard,
            height: height * 0.5,
            maxWidth: width * 1
          }}
        >
          <View style={style.card}>
            <CameraDonar />

            <View
              style={{
                ...style.containerText,
                marginStart: 18
              }}
            >
              <Text style={{ color: '#fff', fontSize: 16 }}>
                Subi las fotos más lindas de tu producto.
              </Text>
            </View>
          </View>

          <View style={style.card}>
            <MaginPenDonar />

            <View style={style.containerText}>
              <Text style={{ color: '#fff', fontSize: 16 }}>
                Brindá detalles como: tipo de producto,
              </Text>
              <Text style={{ color: '#fff', fontSize: 16 }}>
                talle y una descripción breve y clara.
              </Text>
            </View>
          </View>

          <View
            style={{
              ...style.card
            }}
          >
            <Dollar />

            <View
              style={{
                ...style.containerText,
                marginEnd: 50
              }}
            >
              <Text style={{ color: '#fff', fontSize: 16 }}>
                Ponele precio y listo, ¡publicalo!
              </Text>
            </View>
          </View>
        </View>

        {/* <SyledButton
          white
          title='Crear publicación'
          onPress={() => navigator.navigate('FotoProductoScreen')}
        /> */}
        <OnboardingButton 
          color='white'
          onPress={() => console.log('navigate')}
          text='Crear publicación'
        />
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  containerHeader: {
    marginTop: 40,
    marginBottom: 10
  },
  contenedorCard: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginBottom: 20
    // marginStart: 15,
  },
  card: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row'
  },
  containerText: {
    marginStart: 20
  }
})

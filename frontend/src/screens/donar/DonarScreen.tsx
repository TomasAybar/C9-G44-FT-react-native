import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, useWindowDimensions, View, Text } from 'react-native'
import StyledView from '../../styledComponents/StyledView'
import StyledText from '../../styledComponents/StyledText'
import SyledButton from '../../styledComponents/StyledButton'
import { CameraDonar } from '../../components/icons/CameraDonar'
import { MaginPenDonar } from '../../components/icons/MaginPenDonar'
import { CalendarTickDonar } from '../../components/icons/CalendarTickDonar'
import { OnboardingButton } from '../../components/buttons/OnboardingButton'
import theme from '../../themes/theme'

export const DonarScreen = () => {
  const { height, width } = useWindowDimensions()

  const navigator = useNavigation()

  return (
    <View style={{ backgroundColor: theme.colors.appBackground, paddingHorizontal: 20, flex: 1 }}>
      <View
        style={{
          ...style.containerHeader,
          // height: height * 0.1
        }}
      >
        <Text 
          style={{ color: '#fff', fontWeight: '700', fontSize: 17, textAlign: 'center', lineHeight: 30 }}
        >Dandole una segunda oportunidad a tu ropa,{'\n'}estas ayudando a quienes {'\n'}mas lo necesitan.</Text>
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
                Subi fotos de lo que queres donar.
              </Text>
            </View>
          </View>

          <View style={style.card}>
            <MaginPenDonar />

            <View style={style.containerText}>
              <Text style={{ color: '#fff', fontSize: 16 }}>
                Contanos la cantidad de prendas que
              </Text>
              <Text style={{ color: '#fff', fontSize: 16 }}>
                son y una breve descripcion.
              </Text>
            </View>
          </View>

          <View style={style.card}>
            <CalendarTickDonar />

            <View
              style={{
                ...style.containerText,
                marginStart: 15,
                overflow: 'hidden'
              }}
            >
              <Text style={{ color: '#fff', fontSize: 16 }}>
                Inidica fecha, horario y direccion para
              </Text>
              <Text style={{ color: '#fff', fontSize: 16 }}>
                coordinar la entrega.
              </Text>
              <Text style={{ color: '#fff', fontSize: 16 }}>
                ¡Listo, publica tu donación!
              </Text>
            </View>
          </View>
        </View>

        {/* <SyledButton
          white
          title='Crear publicación'
          onPress={() => navigator.navigate('DetalleDonarScreen')}
        /> */}

        <OnboardingButton 
          color='white' 
          onPress={() => console.log('navigate')} 
          text='Crear publicacion' 

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

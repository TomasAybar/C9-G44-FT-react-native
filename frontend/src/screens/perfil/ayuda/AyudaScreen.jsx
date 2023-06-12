import React from 'react'
// import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import StyledView from '../../../styledComponents/StyledView'
import { EcoBtnNavigate } from '../../../components/EcoBtnNavigate'

export const AyudaScreen = () => {
  const navigator = useNavigation()

  return (
    <StyledView dark height100>
      <StyledView container center>
        <View style={{ marginTop: 50 }}>
          <EcoBtnNavigate
            text='Quiero comprar ¿Cómo hago?'
            onPress={() => navigator.navigate('QuieroComprarScreen')}
          />
          <EcoBtnNavigate
            text='Quiero vender, ¿Cómo publico?'
            onPress={() => navigator.navigate('QuieroVenderScreen')}
          />
          <EcoBtnNavigate
            text='Devoluciones'
            onPress={() => navigator.navigate('DevolucionesScreen')}
          />
          <EcoBtnNavigate
            text='Donaciones'
            onPress={() => navigator.navigate('DonacionesScreen')}
          />
          <EcoBtnNavigate
            text='Baja de cuenta'
            onPress={() => navigator.navigate('SalirScreen')}
          />
        </View>
      </StyledView>
    </StyledView>
  )
}

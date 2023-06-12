import React, { useState } from 'react'
import StyledView from '../../../styledComponents/StyledView'
import StyledButton from '../../../styledComponents/StyledButton'
import StyledText from '../../../styledComponents/StyledText'
import StyledTextInput from '../../../styledComponents/StyledTextInput'
import { StyleSheet, Text, View, Image } from 'react-native'
import { loginValidationShema } from '../../../validationSchema/validationsRegister'
import { useNavigation } from '@react-navigation/native'
import { AgregarImagen } from '../completar/AgregarImagen'
import { FormikInputValue } from '../../../styledComponents/FormikInputValue'
import { Formik } from 'formik'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import theme from '../../../themes/theme'

const initialValues = {
  telefono: '',
  direccion: ''
}

export const CompletarPerfilScreen = () => {
  const navigator = useNavigation()
  return (
    <KeyboardAwareScrollView
      style={{ backgroundColor: theme.colors.appBackground }}
    >
      <Formik
        validationSchema={loginValidationShema}
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        <StyledView center container height100>
          <StyledText left size12 marginTop={70}>
            ¡Hola María!
            {'\n'}
            {'\n'}
            {'\n'}
            Solo te pediremos algunos datos mas para completar tu perfil.
          </StyledText>
          <StyledText left size14 marginBottom={10} marginTop={20}>
            Foto (opcional)
          </StyledText>
          <AgregarImagen />
          <StyledText size12 left marginTop={15}>
            Teléfono
          </StyledText>
          <FormikInputValue
            name='telefono'
            placeholder='Ej: 11 2345678'
            placeholderTextColor='rgba(255,255,255,0.5)'
          />
          <StyledText size12 left marginTop={15}>
            Dirección
          </StyledText>
          <FormikInputValue
            name='direccion'
            placeholder='Ej: Av Libertador 123, CABA'
            placeholderTextColor='rgba(255,255,255,0.5)'
          />
          <StyledText />
          <StyledButton
            white
            title='Siguiente'
            onPress={() => navigator.navigate('CompletarMetodoCobroScreen')}
          />
        </StyledView>
      </Formik>
    </KeyboardAwareScrollView>
  )
}

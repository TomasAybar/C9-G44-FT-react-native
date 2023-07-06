import React, { useState, useRef } from 'react'
import StyledView from '../../styledComponents/StyledView'
import StyledButton from '../../styledComponents/StyledButton'
import StyledText from '../../styledComponents/StyledText'
import StyledTextInput from '../../styledComponents/StyledTextInput'
import { Formik, useField } from 'formik'
import { loginValidationShema } from '../../validationSchema/validationsRegister'
import { useNavigation } from '@react-navigation/native'
import { FormikInputValue } from '../../styledComponents/FormikInputValue'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import theme from '../../themes/theme'
import { View, StyleSheet } from 'react-native'

const initialValues = {
  name: '',
  email: '',
  password: '',
  repassword: ''
}

export const RegistroNombreScreen = () => {
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
        {({ handleChange, handleSubmit, values }) => {
          return (
            <StyledView container height100>
              <StyledText left size12 marginTop={70}>
                Nombre y Apellido
              </StyledText>
              <FormikInputValue
                name='name'
                placeholder='Nombre y Apellido'
                placeholderTextColor='rgba(255,255,255,0.5)'
              />

              <StyledText left size12 marginTop={15}>
                E-mail
              </StyledText>
              <FormikInputValue
                name='email'
                placeholder='E-mail'
                placeholderTextColor='rgba(255,255,255,0.5)'
              />

              <StyledText left size12 marginTop={15}>
                Contraseña
              </StyledText>
              <FormikInputValue
                name='password'
                placeholder='Contraseña'
                placeholderTextColor='rgba(255,255,255,0.5)'
                secureTextEntry
              />

              <StyledText left size12 marginTop={15}>
                Repetir Contraseña
              </StyledText>
              <FormikInputValue
                name='repassword'
                placeholder='Repetir contraseña'
                placeholderTextColor='rgba(255,255,255,0.5)'
                secureTextEntry
              />
              <StyledText marginTop={15}>{'\n'}</StyledText>

              <StyledButton
                white
                title='Crear cuenta'
                onPress={() => navigator.navigate('RegistroExitoso')}
              />
            </StyledView>
          )
        }}
      </Formik>
    </KeyboardAwareScrollView>
  )
}

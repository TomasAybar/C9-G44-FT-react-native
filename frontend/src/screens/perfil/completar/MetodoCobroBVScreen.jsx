import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, Button, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import StyledView from '../../../styledComponents/StyledView'
import StyledButton from '../../../styledComponents/StyledButton'
import StyledText from '../../../styledComponents/StyledText'
import { loginValidationShema } from '../../../validationSchema/validationsRegister'
import { Formik, useField } from 'formik'
import { FormikInputValue } from '../../../styledComponents/FormikInputValue'
import theme from '../../../themes/theme'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const initialValues = {
  email: '',
  name: '',
  cbu: ''
}

export const MetodoCobroBVScreen = () => {
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
          <StyledText size12 marginBottom={50} marginTop={70}>
            Ingresá los datos de la billetera virtual
          </StyledText>
          <StyledText left size12 alignItem marginTop={15}>
            Mail del usuario.
          </StyledText>
          <FormikInputValue
            name='email'
            placeholder='Ej: maria@gmail.com'
            placeholderTextColor='rgba(255,255,255,0.5)'
          />
          <StyledText left size12 alignItem marginTop={15}>
            Nombre y apellido (como figura en el DNI)
          </StyledText>
          <FormikInputValue
            name='name'
            placeholder='María Lopez'
            placeholderTextColor='rgba(255,255,255,0.5)'
          />
          <StyledText left size12 alignItem marginTop={15}>
            CVU / Alias
          </StyledText>
          <FormikInputValue
            name='cvu'
            placeholder='maria.lopez.mp'
            placeholderTextColor='rgba(255,255,255,0.5)'
          />
          <StyledText />
          <StyledButton
            white
            title='Guardar'
            onPress={() => navigator.navigate('CongratsScreen')}
          />
        </StyledView>
      </Formik>
    </KeyboardAwareScrollView>
  )
}

import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, Button, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import StyledView from '../../../styledComponents/StyledView'
import StyledButton from '../../../styledComponents/StyledButton'
import StyledText from '../../../styledComponents/StyledText'
import StyledTextInput from '../../../styledComponents/StyledTextInput'
import { loginValidationShema } from '../../../validationSchema/validationsRegister'
import { Formik, useField } from 'formik'
import { FormikInputValue } from '../../../styledComponents/FormikInputValue'
import theme from '../../../themes/theme'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const initialValues = {
  name: '',
  cbu: '',
  cuil: ''
}

export const MetodoCobroTRFScreen = () => {
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
            Ingresá los datos de la cuenta.
          </StyledText>
          <StyledText left size12 alignItem marginTop={15}>
            Nombre y apellido del titular.
          </StyledText>
          <FormikInputValue
            name='name'
            placeholder='Ej: María Lopez'
            placeholderTextColor='rgba(255,255,255,0.5)'
          />
          <StyledText left size12 alignItem marginTop={15}>
            CBU / Alias
          </StyledText>
          <FormikInputValue
            name='cbu'
            placeholder='maria.lopez.ropa'
            placeholderTextColor='rgba(255,255,255,0.5)'
          />
          <StyledText left size12 alignItem marginTop={15}>
            CUIT / CUIL
          </StyledText>
          <FormikInputValue
            name='cuil'
            placeholder='20-1020304050-0'
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

import React from 'react'
import StyledView from '../../styledComponents/StyledView'
import StyledButton from '../../styledComponents/StyledButton'
import StyledText from '../../styledComponents/StyledText'
import StyledTextInput from '../../styledComponents/StyledTextInput'
import { Formik, useField }  from 'formik'
import { StyleSheet, Text  } from 'react-native'
import { loginValidationShema } from '../../validationSchema/validationsRegister'
import { useNavigation } from '@react-navigation/native';

const initialValues = {
    name: '',
    email: '',
    password: '',
    repassword: ''
}

const styles = StyleSheet.create({
    form:{
        margin: 12
    },
    error:{
        color: '#FFFFFF',
        fontStyle: 'italic' ,
		opacity: 0.6,
        fontSize: 12.8,
        alignSelf: 'stretch',
        marginBottom: 20,
    }
})

const FormikInputValue = ({name, ...props}) => {
    const [field, meta, helpers] = useField(name)
    return(
        <>
        <StyledTextInput
            error={meta.error}
            value={field.value}
            onChangeText={value => helpers.setValue(value)}
            {... props}
        />
        {meta.error && <Text style={styles.error}>{meta.error}</Text>}
        </>
  )
}

export const RegistroNombreScreen = () => {
    const navigator = useNavigation();
  return (
    
    <Formik validationSchema={loginValidationShema} initialValues={initialValues} 
    onSubmit={values => console.log(values)}>
        {({ handleChange, handleSubmit, values }) => {
            return (
                <StyledView dark>
					<StyledView container center>

					<StyledText size12 alignItem alignSelf >
					Nombre y Apellido
					</StyledText> 
					<FormikInputValue 
                    name = 'name'
                    placeholder='Nombre y Apellido'
                    />

					<StyledText size12 alignItem alignSelf>
						E-mail
					</StyledText>
                    <FormikInputValue 
                    name = 'email'
                    placeholder='E-mail'
                    />

					<StyledText size12 alignItem alignSelf>
					Contraseña
					</StyledText>
                    <FormikInputValue
                    name = 'password'
                    placeholder='Contraseña'
                    secureTextEntry
                    />
					
					<StyledText size12 alignItem alignSelf>
					   Repetir Contraseña
					</StyledText>
					<FormikInputValue 
                    name = 'repassword'
                    placeholder='Repetir contraseña'
					secureTextEntry
                    />
                    
                    <StyledButton 
                    white 
					title={'Crear cuenta'}
					onPress={() => navigator.navigate('RegistroExitoso')}
					></StyledButton>
					</StyledView>
                </StyledView>
            )
        }}

    </Formik>
    )

}

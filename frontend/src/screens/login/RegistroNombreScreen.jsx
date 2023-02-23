import React, { useState } from 'react'
import StyledView from '../../styledComponents/StyledView'
import StyledButton from '../../styledComponents/StyledButton'
import StyledText from '../../styledComponents/StyledText'
import StyledTextInput from '../../styledComponents/StyledTextInput'
import { Formik, useField } from 'formik'
import { StyleSheet, Text } from 'react-native'
import { loginValidationShema } from '../../validationSchema/validationsRegister'
import { useNavigation } from '@react-navigation/native'

const initialValues = {
	name: '',
	email: '',
	password: '',
	repassword: '',
}

const styles = StyleSheet.create({
	error: {
		color: 'red',
		fontStyle: 'italic',
		opacity: 0.6,
		fontSize: 12.8,
		alignSelf: 'stretch',
		marginBottom: 5,
	},
})

const FormikInputValue = ({ name, ...props }) => {
	const [field, meta, helpers] = useField(name)
	return (
		<>
			<StyledTextInput
				error={meta.error}
				value={field.value}
				onChangeText={(value) => helpers.setValue(value)}
				{...props}
			/>
			{meta.error && <Text style={styles.error}>{meta.error}</Text>}
		</>
	)
}

export const RegistroNombreScreen = () => {
	const navigator = useNavigation()

	return (
		<Formik
			validationSchema={loginValidationShema}
			initialValues={initialValues}
			onSubmit={(values) => console.log(values)}
		>
			{({ handleChange, handleSubmit, values }) => {
				return (
					<StyledView dark>
						<StyledView container center height100>
							<StyledText size12 alignItem marginTop>
								Nombre y Apellido
							</StyledText>
							<FormikInputValue
								name='name'
								placeholder='Nombre y Apellido'
								placeholderTextColor='rgba(255,255,255,0.5)'
							/>

							<StyledText size12 alignItem alignSelf marginTop>
								E-mail
							</StyledText>
							<FormikInputValue
								name='email'
								placeholder='E-mail'
								placeholderTextColor='rgba(255,255,255,0.5)'
							/>

							<StyledText size12 alignItem alignSelf marginTop>
								Contraseña
							</StyledText>
							<FormikInputValue
								name='password'
								placeholder='Contraseña'
								placeholderTextColor='rgba(255,255,255,0.5)'
								secureTextEntry
							/>

							<StyledText size12 alignItem alignSelf marginTop>
								Repetir Contraseña
							</StyledText>
							<FormikInputValue
								name='repassword'
								placeholder='Repetir contraseña'
								placeholderTextColor='rgba(255,255,255,0.5)'
								secureTextEntry
							/>
							<StyledText marginTop>{'\n'}</StyledText>

							<StyledButton
								white
								title={'Crear cuenta'}
								onPress={() =>
									navigator.navigate('RegistroExitoso')
								}
							></StyledButton>
						</StyledView>
					</StyledView>
				)
			}}
		</Formik>
	)
}

import React from 'react'
import { Link, useNavigation } from '@react-navigation/native'
import { Button, Text, View, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
// import { style } from '../../themes/appTheme'
import StyledView from '../../styledComponents/StyledView'
import { LogoEcoModa } from '../../components/icons/LogoEcoModa'
import StyledText from '../../styledComponents/StyledText'
import SyledButton from '../../styledComponents/StyledButton'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import theme from '../../themes/theme'
import { Formik, useField } from 'formik'
import { loginValidationShema } from '../../validationSchema/validationsRegister'
import { FormikInputValue } from '../../styledComponents/FormikInputValue'
import {Linkeo} from '../../components/Linkeo'

const initialValues = {
	email: '',
	password: '',
}

export const LoginScreen = () => {
	const navigator = useNavigation()
	

	return (
		
		<KeyboardAwareScrollView
			style={{ backgroundColor: theme.colors.appBackground}}
		>
			<Formik
		validationSchema={loginValidationShema}
		initialValues={initialValues}
		onSubmit={(values) => console.log(values)}
		>
		{({ handleChange, handleSubmit, values }) => {
			return (
		<StyledView container center marginTop={80}>
			<View style={style.logo}>
				<LogoEcoModa />
			</View>

			<StyledText left size12 >
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

			<View
				style={{
					...style.label,
					marginBottom: 60,
				}}
			>
				
				<StyledText size12 right>
					<Linkeo 
					onPress={() => alert('Reestablecer contraseña.')}>
						¿Olvidaste tu contraseña?
						</Linkeo>.
				</StyledText>
			</View>

			<View style={style.btn}>
				<SyledButton
					white
					title={'Iniciar sesión'}
					onPress={() => navigator.navigate('StackNavigation')}
				></SyledButton>
			</View>

			<SyledButton
				black
				title={'Registrarme'}
				onPress={() => navigator.navigate('RegistroNombreScreen')}
			></SyledButton>
		</StyledView>
			)
		}}
		</Formik>
		</KeyboardAwareScrollView>
	)
}

const style = StyleSheet.create({
	logo: {
		marginBottom: 100,
		alignItems: 'center',
	},
	label: {
		marginBottom: 10,
		alignItems: 'flex-start',
		textAlign: 'start',
	},
	input: {
		marginBottom: 12,
	},
	btn: {
		marginBottom: 12,
	},
})

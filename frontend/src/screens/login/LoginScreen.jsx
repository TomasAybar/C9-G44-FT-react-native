import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, Text, View, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
// import { style } from '../../themes/appTheme'
import StyledView from '../../styledComponents/StyledView'
import { LogoEcoModa } from '../../components/icons/LogoEcoModa'
import StyledText from '../../styledComponents/StyledText'
import { EcoInput } from '../../components/EcoInput'
import SyledButton from '../../styledComponents/StyledButton'

export const LoginScreen = () => {
	const navigator = useNavigation()

	return (
		<StyledView dark container height100 center>
			<View style={style.logo}>
				<LogoEcoModa />
			</View>

			<View style={style.label}>
				<StyledText size12 left>
					Email
				</StyledText>
			</View>

			<View style={style.input}>
				<EcoInput placeholder='maria@gmail.com' />
			</View>

			<View style={style.label}>
				<StyledText size12 left>
					Contraseña
				</StyledText>
			</View>

			<View style={style.input}>
				<EcoInput placeholder='******' secure={true} />
			</View>

			<View
				style={{
					...style.label,
					marginBottom: 60,
				}}
			>
				<StyledText size12 right>
					¿Olvidaste tu contraseña?
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
}

const style = StyleSheet.create({
	logo: {
		marginBottom: 120,
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

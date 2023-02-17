import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { style } from '../../themes/appTheme'

export const LoginScreen = () => {
	const navigator = useNavigation()

	return (
		<View style={style.alinearCentro}>
			<Text style={style.title}>LoginScreen 2</Text>

			<TouchableOpacity>
				<Button
					title='Iniciar sesion'
					onPress={() => navigator.navigate('Tabs')}
				/>
			</TouchableOpacity>

			<TouchableOpacity>
				<Button
					title='Registrarme'
					onPress={() => navigator.navigate('RegistroNombreScreen')}
				/>
			</TouchableOpacity>
		</View>
	)
}

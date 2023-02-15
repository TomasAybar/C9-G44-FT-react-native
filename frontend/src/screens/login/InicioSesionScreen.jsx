import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const InicioSesionScreen = () => {
	const navigator = useNavigation()

	return (
		<View>
			<Text>InicioSesionScreen</Text>
			<Text style={styles.title}>Ecomoda</Text>
			<TouchableOpacity>
				<Button
					title='Registrarme'
					onPress={() => navigator.navigate('RegistroNombreScreen')}
				/>
			</TouchableOpacity>

			<TouchableOpacity>
				<Button
					title='Iniciar sesion - ir a registro'
					onPress={() => navigator.navigate('LoginScreen')}
				/>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	title: {
		fontSize: 30,
		textAlign: 'center',
		fontWeight: '600',
		lineHeight: 100,
	},
})

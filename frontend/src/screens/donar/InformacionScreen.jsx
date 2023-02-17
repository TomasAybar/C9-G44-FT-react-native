import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const InformacionScreen = () => {
	return (
		<View>
			<Text>InformacionScreen</Text>
			<Text>Informacion para recoleccion</Text>

			<TouchableOpacity>
				<Button
					title='Donar'
					onPress={() =>
						alert('Muchas gracias - ver detalle - volver al inicio')
					}
				/>
			</TouchableOpacity>
		</View>
	)
}

import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { style } from '../../themes/appTheme'

export const InformacionScreen = () => {
	const navigator = useNavigation()

	const alerNavigate = () => {
		Alert.alert(
			'¡Muchas gracias!',
			'Con tu donación ayudas a muchas personas',
			[
				{
					text: 'Ver detalle',
					onPress: () => navigator.navigate('ArticuloPublicado'),
				},
				{
					text: 'Volver al inicio',
					onPress: () => navigator.popToTop(),
				},
			]
		)
	}

	const loading = () => {
		Alert.alert('Preparando publicación', '', [
			{
				text: 'OK',
				onPress: () => alerNavigate(),
			},
		])
	}

	return (
		<View style={style.alinearCentro}>
			<Text style={style.title}>
				Indica la fecha y franja horaria para la recolección.
			</Text>
			<Text style={style.title}>Fecha</Text>
			<Text style={style.title}>Desde</Text>
			<Text style={style.title}>Hasta</Text>
			<Text style={style.title}>Dirección: Av. Santa Fe 123</Text>

			<TouchableOpacity>
				<Button title='Donar' onPress={loading} />
			</TouchableOpacity>
		</View>
	)
}

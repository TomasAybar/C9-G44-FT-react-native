import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { style } from '../../themes/appTheme'

export const CheckeoFinalScreen = () => {
	const navigator = useNavigation()

	const alerNavigate = () => {
		Alert.alert(
			'¡Felicitaciones!',
			'Tu producto ya se encuentra publicado',
			[
				{
					text: 'Volver al inicio',
					onPress: () => navigator.popToTop(),
				},
				{
					text: 'Ver mi publicación',
					onPress: () =>
						navigator.navigate('ArticuloPublicadoVender'),
				},
			]
		)
	}

	const loading = () => {
		Alert.alert(
			'Preparando publicacion',
			'En unos instantes verás tu producto publicado.',
			[
				{
					text: 'OK',
					onPress: () => alerNavigate(),
				},
			]
		)
	}

	return (
		<View style={style.alinearCentro}>
			<Text style={style.title}>
				Dale un ultimo vistazo y si esta correcto, Listo!
			</Text>
			<Text style={style.title}>a publicar</Text>

			<TouchableOpacity>
				<Button title='Publicar' onPress={loading} />
			</TouchableOpacity>
		</View>
	)
}

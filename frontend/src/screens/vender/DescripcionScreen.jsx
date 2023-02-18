import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { style } from '../../themes/appTheme'

export const DescripcionScreen = () => {
	const navigator = useNavigation()

	return (
		<View style={style.alinearCentro}>
			<Text style={style.title}>
				Agregar una descripcion (hasta 500 caracteres)
			</Text>
			<Text style={style.title}>
				Vestido verde con botones en el frente
			</Text>
			<Text style={style.title}>Precio de publicacion</Text>
			<Text style={style.title}>Tu ganancia</Text>

			<TouchableOpacity>
				<Button
					title='Siguiente'
					onPress={() => navigator.navigate('MetodoPagoScreen')}
				/>
			</TouchableOpacity>
		</View>
	)
}

import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { style } from '../../themes/appTheme'

export const FotoProductoScreen = () => {
	const navigator = useNavigation()

	return (
		<View style={style.alinearCentro}>
			<Text style={style.title}>FotoProductoScreen</Text>
			<Text style={style.title}>Subi fotos de la prenda.</Text>
			<Text style={style.title}>Podras cargar hasta 5 imagenes</Text>

			<TouchableOpacity>
				<Button
					title='Siguiente'
					onPress={() => navigator.navigate('CategoriaScreen')}
				/>
			</TouchableOpacity>
		</View>
	)
}

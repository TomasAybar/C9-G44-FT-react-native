import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { style } from '../../themes/appTheme'

export const CategoriaScreen = () => {
	const navigator = useNavigation()

	return (
		<View style={style.alinearCentro}>
			<Text style={style.title}>Categoria</Text>
			<Text style={style.title}>Seleccione un rubro</Text>
			<Text style={style.title}>Que producto es?</Text>

			<TouchableOpacity>
				<Button
					title='Siguiente'
					onPress={() => navigator.navigate('TipoProductoScreen')}
				/>
			</TouchableOpacity>
		</View>
	)
}

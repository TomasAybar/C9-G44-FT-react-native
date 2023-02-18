import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { style } from '../../themes/appTheme'

export const ArticuloPublicado = () => {
	const navigator = useNavigation()

	return (
		<View style={style.alinearCentro}>
			<Text style={style.title}>Articulo publicado</Text>
			<Text style={style.title}>Vestido verde talle</Text>
			<Text style={style.title}>L</Text>
			<Text style={style.title}>$18.000.-</Text>

			<TouchableOpacity>
				<Button
					title='Siguiente'
					onPress={() => navigator.popToTop()}
				/>
			</TouchableOpacity>
		</View>
	)
}

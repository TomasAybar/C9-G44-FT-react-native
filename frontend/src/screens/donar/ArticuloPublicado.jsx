import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { style } from '../../themes/appTheme'

export const ArticuloPublicado = () => {
	const navigator = useNavigation()

	return (
		<View style={style.alinearCentro}>
			<Text style={style.title}>Tu donación publicada</Text>
			<Text style={style.title}>Retiro: 15/2/23</Text>
			<Text style={style.title}>9 a 15hs</Text>
			<Text style={style.title}>10 prendas</Text>

			<TouchableOpacity>
				<Button
					title='Siguiente'
					onPress={() => navigator.popToTop()}
				/>
			</TouchableOpacity>
		</View>
	)
}

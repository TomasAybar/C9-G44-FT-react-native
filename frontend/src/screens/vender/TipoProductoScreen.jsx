import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { style } from '../../themes/appTheme'

export const TipoProductoScreen = () => {
	const navigator = useNavigation()

	return (
		<View style={style.alinearCentro}>
			<Text style={style.title}>¿En qué estado se encuentra?</Text>
			<Text style={style.title}>¿Qué talle es?</Text>
			<Text style={style.title}>Otro: _________</Text>
			<Text style={style.title}>¿Cuál es su color principal?</Text>
			<Text style={style.title}>Otro: _________</Text>

			<TouchableOpacity>
				<Button
					title='Siguiente'
					onPress={() => navigator.navigate('DescripcionScreen')}
				/>
			</TouchableOpacity>
		</View>
	)
}

import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { style } from '../../themes/appTheme'

export const MetodoPagoScreen = () => {
	const navigator = useNavigation()

	return (
		<View style={style.alinearCentro}>
			<Text style={style.title}>¿Cómo preferís que te paguen?</Text>
			<Text style={style.title}>Transferencia bancaria</Text>
			<Text style={style.title}>Billetera virtual</Text>

			<TouchableOpacity>
				<Button
					title='Siguiente'
					onPress={() => navigator.navigate('CheckeoFinalScreen')}
				/>
			</TouchableOpacity>
		</View>
	)
}

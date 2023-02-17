import React from 'react'
import { style } from '../../themes/appTheme'
import { useNavigation } from '@react-navigation/native'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const VenderScreen = () => {
	const navigator = useNavigation()

	return (
		<View style={style.alinearCentro}>
			<Text style={style.title}>VenderScreen</Text>

			<TouchableOpacity>
				<Button
					title='Crear Publicacion'
					onPress={() => navigator.navigate('FotoProductoScreen')}
				/>
			</TouchableOpacity>
		</View>
	)
}

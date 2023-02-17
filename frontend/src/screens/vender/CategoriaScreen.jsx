import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const CategoriaScreen = () => {
	const navigator = useNavigation()

	return (
		<View>
			<Text>CategoriaScreen</Text>

			<TouchableOpacity>
				<Button
					title='Siguiente'
					onPress={() => navigator.navigate('TipoProductoScreen')}
				/>
			</TouchableOpacity>
		</View>
	)
}

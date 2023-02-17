import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const FotoProductoScreen = () => {
	const navigator = useNavigation()

	return (
		<View>
			<Text>FotoProductoScreen</Text>

			<TouchableOpacity>
				<Button
					title='Siguiente'
					onPress={() => navigator.navigate('CategoriaScreen')}
				/>
			</TouchableOpacity>
		</View>
	)
}

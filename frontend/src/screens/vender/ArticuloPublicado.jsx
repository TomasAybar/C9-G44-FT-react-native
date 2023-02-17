import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const ArticuloPublicado = () => {
	const navigator = useNavigation()

	return (
		<View>
			<Text>ArticuloPublicado</Text>

			<TouchableOpacity>
				<Button
					title='Siguiente'
					onPress={() => alert('ArticuloPublicado')}
				/>
			</TouchableOpacity>
		</View>
	)
}

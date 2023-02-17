import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CheckeoFinalScreen = () => {
	const navigator = useNavigation()

	return (
		<View>
			<Text>CheckeoFinalScreen</Text>

			<TouchableOpacity>
				<Button
					title='Publicacion'
					onPress={() => navigator.navigate('ArticuloPublicado')}
				/>
			</TouchableOpacity>
		</View>
	)
}

export default CheckeoFinalScreen

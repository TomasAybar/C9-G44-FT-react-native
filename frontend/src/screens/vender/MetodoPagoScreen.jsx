import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const MetodoPagoScreen = () => {
	const navigator = useNavigation()

	return (
		<View>
			<Text>MetodoPagoScreen</Text>

			<TouchableOpacity>
				<Button
					title='Siguiente'
					onPress={() => navigator.navigate('CheckeoFinalScreen')}
				/>
			</TouchableOpacity>
		</View>
	)
}

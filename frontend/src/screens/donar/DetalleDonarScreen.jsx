import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const DetalleDonarScreen = () => {
	const navigator = useNavigation()

	return (
		<View>
			<Text>DetalleDonarScreen</Text>

			<TouchableOpacity>
				<Button
					title='Siguiente'
					onPress={() => navigator.navigate('InformacionScreen')}
				/>
			</TouchableOpacity>
		</View>
	)
}

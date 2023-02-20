import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, Button, Alert } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const MetodoCobroTRFScreen = () => {
	const navigation = useNavigation()

	return (
		<View>
			<Text>MetodoCobroTRFScreen</Text>

			<TouchableOpacity>
				<Button
					title='Guardar'
					onPress={() => navigation.navigate('CongratsScreen')}
				/>
			</TouchableOpacity>
		</View>
	)
}

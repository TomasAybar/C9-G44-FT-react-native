import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const Settings = () => {
	const navigation = useNavigation()
	return (
		<View>
			<Text>Settings</Text>

			<TouchableOpacity>
				<Button
					title='ir al inicio'
					onPress={() => navigation.popToTop()}
				/>
			</TouchableOpacity>
		</View>
	)
}

import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const Profile = () => {
	const navigation = useNavigation()
	return (
		<View>
			<Text>Profile</Text>
			<TouchableOpacity>
				<Button
					title='ir a settings'
					onPress={() => navigation.navigate('Settings')}
				/>
			</TouchableOpacity>
		</View>
	)
}

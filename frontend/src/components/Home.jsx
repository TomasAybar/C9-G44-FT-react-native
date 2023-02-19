import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const Home = () => {
	const navigation = useNavigation()
	return (
		<View>
			<Text>Home</Text>
			<TouchableOpacity>
				<Button
					title='ir a profile'
					onPress={() => navigation.navigate('Profile')}
				/>
			</TouchableOpacity>
		</View>
	)
}

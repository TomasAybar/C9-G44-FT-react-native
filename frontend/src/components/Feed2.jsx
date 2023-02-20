import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const Feed2 = () => {
	const navigation = useNavigation()
	return (
		<View>
			<Text>Feed2</Text>
			<TouchableOpacity>
				<Button
					title='ir a feed3'
					onPress={() => navigation.navigate('Feed3')}
				/>
			</TouchableOpacity>
		</View>
	)
}

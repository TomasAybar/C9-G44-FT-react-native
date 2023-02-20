import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const Feed = () => {
	const navigation = useNavigation()
	return (
		<View>
			<Text>Feed</Text>
			<TouchableOpacity>
				<Button
					title='ir a feed2'
					onPress={() => navigation.navigate('Feed2')}
				/>
			</TouchableOpacity>
		</View>
	)
}

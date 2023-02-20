import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const CongratsScreen = () => {
	const navigation = useNavigation()
	return (
		<View>
			<Text>CongratsScreen</Text>

			<TouchableOpacity>
				<Button
					title='Comenzar'
					onPress={() => navigation.navigate('StackNavigation')}
				/>
			</TouchableOpacity>
		</View>
	)
}

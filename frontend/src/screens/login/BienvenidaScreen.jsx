import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const BienvenidaScreen = () => {
	const navigator = useNavigation()

	return (
		<View>
			<Text>BienvenidaScreen</Text>

			<TouchableOpacity>
				<Button
					title='Continuar'
					onPress={() => navigator.navigate('Tabs')}
				/>
			</TouchableOpacity>
		</View>
	)
}

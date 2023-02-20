import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const CompletarMetodoCobroScreen = () => {
	const navigation = useNavigation()
	return (
		<View>
			<Text>CompletarMetodoCobroScreen</Text>
			<TouchableOpacity>
				<Button
					title='Transferencia bancaria'
					onPress={() => navigation.navigate('MetodoCobroTRFScreen')}
				/>
			</TouchableOpacity>

			<TouchableOpacity>
				<Button
					title='Billetera virtual'
					onPress={() => navigation.navigate('MetodoCobroBVScreen')}
				/>
			</TouchableOpacity>

			<TouchableOpacity>
				<Button
					title='Siguiente'
					onPress={() => navigation.navigate('CongratsScreen')}
				/>
			</TouchableOpacity>
		</View>
	)
}

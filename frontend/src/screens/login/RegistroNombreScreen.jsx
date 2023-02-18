import React from 'react'
import { Button, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const RegistroNombreScreen = () => {
	const navigation = useNavigation()

	return (
		<View>
			<Text>RegistroNombreScreen</Text>

			<TouchableOpacity>
				<Button
					title='Crear cuenta'
					onPress={() => navigation.navigate('BienvenidaScreen')}
				/>
			</TouchableOpacity>
		</View>
	)
}

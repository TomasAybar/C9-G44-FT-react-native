import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const CompletarPerfilScreen = () => {
	const navigation = useNavigation()
	return (
		<View>
			<Text>CompletarPerfilScreen</Text>
			<Text>Hola Maria</Text>
			<Text>
				Solo te pediremos algunos datos mas para completar tu perfil
			</Text>

			<TouchableOpacity>
				<Button
					title='Siguiente'
					onPress={() =>
						navigation.navigate('CompletarMetodoCobroScreen')
					}
				/>
			</TouchableOpacity>
		</View>
	)
}

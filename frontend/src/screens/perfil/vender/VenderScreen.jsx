import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const VenderScreen = () => {
	const navigator = useNavigation()

	return (
		<View>
			<Text>VenderScreen</Text>

			<TouchableOpacity>
				<Button
					title='Ganancias'
					onPress={() => navigator.navigate('GananciasScreen')}
				/>
			</TouchableOpacity>

			<TouchableOpacity>
				<Button
					title='Publicaciones'
					onPress={() => navigator.navigate('PublicacionesScreen')}
				/>
			</TouchableOpacity>

			<TouchableOpacity>
				<Button
					title='Editar medios de cobro'
					onPress={() => navigator.navigate('MediosCobrosScreen')}
				/>
			</TouchableOpacity>
		</View>
	)
}

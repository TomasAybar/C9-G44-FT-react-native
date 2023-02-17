import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const TipoProductoScreen = () => {
	const navigator = useNavigation()

	return (
		<View>
			<Text>TipoProductoScreen</Text>

			<TouchableOpacity>
				<Button
					title='Siguiente'
					onPress={() => navigator.navigate('DescripcionScreen')}
				/>
			</TouchableOpacity>
		</View>
	)
}

export default TipoProductoScreen

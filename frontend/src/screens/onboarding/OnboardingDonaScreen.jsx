import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { style } from '../../themes/appTheme'

export const OnboardingDonaScreen = () => {
	const navigator = useNavigation()

	return (
		<View style={style.alinearCentro}>
			<Text>OnboardingDonaScreen</Text>

			<TouchableOpacity>
				<Button
					title='Siguiente'
					onPress={() => navigator.navigate('LoginStack')}
				/>
			</TouchableOpacity>

			<TouchableOpacity>
				<Button title='Volver' onPress={() => navigator.goBack()} />
			</TouchableOpacity>
		</View>
	)
}

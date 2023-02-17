import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { style } from '../../themes/appTheme'

export const OnboardingCompraScreen = () => {
	const navigator = useNavigation()

	return (
		<View style={style.alinearCentro}>
			<Text>OnboardingCompraScreen</Text>

			<TouchableOpacity>
				<Button
					title='Siguiente'
					onPress={() => navigator.navigate('OnboardingVendeScreen')}
				/>
			</TouchableOpacity>

			<TouchableOpacity>
				<Button
					title='Omitir'
					onPress={() => navigator.navigate('LoginStack')}
				/>
			</TouchableOpacity>
		</View>
	)
}

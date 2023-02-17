import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { style } from '../../themes/appTheme'

export const OnboardingVendeScreen = () => {
	const navigator = useNavigation()

	return (
		<View style={style.alinearCentro}>
			<Text>OnboardingVendeScreen</Text>

			<TouchableOpacity>
				<Button
					title='Siguiente'
					onPress={() => navigator.navigate('OnboardingDonaScreen')}
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

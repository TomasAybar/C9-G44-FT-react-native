import React from 'react'
// import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const AyudaScreen = () => {
	const navigator = useNavigation()

	return (
		<View>
			<Text>AyudaScreen</Text>

			<TouchableOpacity>
				<Button
					title='Quiero comprar, como hago?'
					onPress={() => navigator.navigate('QuieroComprarScreen')}
				/>
			</TouchableOpacity>

			<TouchableOpacity>
				<Button
					title='Quiero Vender, como Publico?'
					onPress={() => navigator.navigate('QuieroVenderScreen')}
				/>
			</TouchableOpacity>

			<TouchableOpacity>
				<Button
					title='Devoluciones'
					onPress={() => navigator.navigate('DevolucionesScreen')}
				/>
			</TouchableOpacity>

			<TouchableOpacity>
				<Button
					title='Donaciones'
					onPress={() => navigator.navigate('DonacionesScreen')}
				/>
			</TouchableOpacity>

			<TouchableOpacity>
				<Button
					title='Baja de cuenta'
					onPress={() => navigator.navigate('BajarCuentaScreen')}
				/>
			</TouchableOpacity>
		</View>
	)
}

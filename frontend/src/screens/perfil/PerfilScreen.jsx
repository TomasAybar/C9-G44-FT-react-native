import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { style } from '../../themes/appTheme'

export const PerfilScreen = () => {
	const navigator = useNavigation()

	return (
		<View style={style.alinearCentro}>
			<Text style={style.title}>PerfilScreen</Text>

			<TouchableOpacity>
				<Button
					title='Comprar'
					onPress={() => navigator.navigate('ComprasScreen')}
				/>
			</TouchableOpacity>

			<TouchableOpacity>
				<Button
					title='Vender'
					onPress={() => navigator.navigate('VenderStack')}
				/>
			</TouchableOpacity>

			<TouchableOpacity>
				<Button
					title='Favoritos'
					onPress={() => navigator.navigate('FavoritosScreen')}
				/>
			</TouchableOpacity>

			<TouchableOpacity>
				<Button
					title='Mensajes'
					onPress={() => navigator.navigate('MensajesScreen')}
				/>
			</TouchableOpacity>

			<TouchableOpacity>
				<Button
					title='Ayuda'
					onPress={() => navigator.navigate('AyudaStack')}
				/>
			</TouchableOpacity>

			<TouchableOpacity>
				<Button title='Salir' onPress={() => alert('Comprar')} />
			</TouchableOpacity>
		</View>
	)
}
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Alert, Button, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { style } from '../../themes/appTheme'

export const BienvenidaScreen = () => {
	const navigator = useNavigation()

	const alertNavigate = () => {
		Alert.alert(
			'Atención',
			'Recordá que necesitarás que tu perfil este completo en caso que quieras vender o comprar.',
			[
				{
					text: 'Completar perfil',
					onPress: () => navigator.navigate('CompletarPerfilStack'),
				},
				{
					text: 'Omitir',
					onPress: () => navigator.navigate('StackNavigation'),
				},
			]
		)
	}

	return (
		<View style={style.alinearCentro}>
			<Text style={style.title}>BienvenidaScreen</Text>

			<Text style={style.title}>!Felicitaciones!</Text>
			<Text style={style.title}>Tu cuenta fue creada con exito</Text>
			<Text style={style.title}>
				Ahora te vamos a pedir algunos datos para completar tu perfil.
			</Text>

			<TouchableOpacity>
				<Button
					title='Comenzar'
					onPress={() => navigator.navigate('CompletarPerfilStack')}
				/>
			</TouchableOpacity>

			<TouchableOpacity>
				<Button title='Omitir' onPress={alertNavigate} />
			</TouchableOpacity>
		</View>
	)
}

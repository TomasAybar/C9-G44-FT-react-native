import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { style } from '../../themes/appTheme'

export const BienvenidaScreen = () => {
	const navigator = useNavigation()

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
					onPress={() => navigator.navigate('Tabs')}
				/>
			</TouchableOpacity>

			<TouchableOpacity>
				<Button
					title='Omitir'
					onPress={() =>
						alert(`ATENCION
					Recorda que necesitaras que tu perfil este completo en caso que quieras vender o comprar.
					-Completar perfil
					-Omitir`)
					}
				/>
			</TouchableOpacity>
		</View>
	)
}

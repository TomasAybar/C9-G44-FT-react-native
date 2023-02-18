import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { style } from '../../themes/appTheme'

export const DonarScreen = () => {
	const navigator = useNavigation()

	return (
		<View style={style.alinearCentro}>
			<Text style={style.title}>
				Dandole una segunda oportunidad a tu ropa, estas ayudando a
				quienes mas lo necesitan.
			</Text>
			<Text style={style.title}>Subi fotos de lo que queres donar.</Text>
			<Text style={style.title}>
				Contanos la cantidad de prendas que son y una breve descripcion.
			</Text>
			<Text style={style.title}>
				Inidica fecha, horario y direccion para coordinar la entrega.
			</Text>
			<Text style={style.title}>Listo, publica tu donacion!</Text>

			<TouchableOpacity>
				<Button
					title='Crear publicación'
					onPress={() => navigator.navigate('DetalleDonarScreen')}
				/>
			</TouchableOpacity>
		</View>
	)
}

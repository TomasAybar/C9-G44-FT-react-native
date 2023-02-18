import React from 'react'
import { View, Text } from 'react-native'
import { style } from '../../../themes/appTheme'

export const QuieroComprarScreen = () => {
	return (
		<View style={style.alinearCentro}>
			<Text style={style.title}>Paso 1</Text>
			<Text style={style.title}>Elegi el articulo que queres.</Text>
			<Text style={style.title}>Paso 2</Text>
			<Text style={style.title}>Selecciona el metodo de pago</Text>
			<Text style={style.title}>Paso 3</Text>
			<Text style={style.title}>
				Ingresa tus datos y coordina el metodo de entrega
			</Text>
			<Text style={style.title}>Paso 4</Text>
			<Text style={style.title}>Disfruta de tu compra</Text>
		</View>
	)
}

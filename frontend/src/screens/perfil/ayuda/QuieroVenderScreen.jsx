import React from 'react'
import { View, Text } from 'react-native'
import { style } from '../../../themes/appTheme'

export const QuieroVenderScreen = () => {
	return (
		<View style={style.alinearCentro}>
			<Text style={style.title}>
				Podras vender tus articulos en 4 simples pasos
			</Text>
			<Text style={style.title}>
				Paso 1: Ingresa a la sección “vender” y subí fotos del producto
				(podrás subir hasta 5 imágenes). Paso 2: Selecciona tipo de
				producto, talle y una breve descripción. Paso 3: Indica cómo
				queres recibir el pago. Paso 4: Publica el producto y ¡Listo!
			</Text>
		</View>
	)
}

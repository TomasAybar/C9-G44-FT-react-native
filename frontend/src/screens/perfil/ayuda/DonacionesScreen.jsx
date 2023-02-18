import React from 'react'
import { View, Text } from 'react-native'
import { style } from '../../../themes/appTheme'

export const DonacionesScreen = () => {
	return (
		<View style={style.alinearCentro}>
			<Text style={style.title}>
				Tu donación es muy importante, con ella estas ayudando a muchas
				personas.
			</Text>
			<Text style={style.title}>
				Paso 1: Ingresa a la sección “donar” y subí fotos del producto
				(podrás subir hasta 5 imágenes). Paso 2: Ingresa la cantidad de
				artículos que querés donar y agrega una breve descripción. Paso
				3: Indica fecha, rango horario y dirección, para poder coordinar
				la entrega. Todas las donaciones son realizadas a instituciones
				benéficas verificadas por nuestro equipo.
			</Text>
		</View>
	)
}

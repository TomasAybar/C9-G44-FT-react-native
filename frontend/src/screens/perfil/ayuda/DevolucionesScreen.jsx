import React from 'react'
import { View, Text } from 'react-native'
import { style } from '../../../themes/appTheme'

export const DevolucionesScreen = () => {
	return (
		<View style={style.alinearCentro}>
			<Text style={style.title}>Devoluciones:</Text>
			<Text style={style.title}>
				Cada vendedor establece sus políticas de devolución. Te
				sugerimos que antes de iniciar la compra, contactes al vendedor
				y consultes su política de cambio y/o devolución.
			</Text>
		</View>
	)
}

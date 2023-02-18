import React from 'react'
import { style } from '../../themes/appTheme'
import { useNavigation } from '@react-navigation/native'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const VenderScreen = () => {
	const navigator = useNavigation()

	return (
		<View style={style.alinearCentro}>
			<Text style={style.title}>VenderScreen</Text>
			<Text style={style.title}>Vende eso que ya no usas.</Text>
			<Text style={style.title}>Publicar es muy facil!</Text>

			<Text style={style.title}>
				Subi las fotos mas lindas de tu productos.
			</Text>
			<Text style={style.title}>
				Brinda detalles como: tipo, talle y una descripcion breve y
				clara.
			</Text>
			<Text style={style.title}>Ponele precio y listo, publicalo!</Text>

			<TouchableOpacity>
				<Button
					title='Crear Publicacion'
					onPress={() => navigator.navigate('FotoProductoScreen')}
				/>
			</TouchableOpacity>
		</View>
	)
}

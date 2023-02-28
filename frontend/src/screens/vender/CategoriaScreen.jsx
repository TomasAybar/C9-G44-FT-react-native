import React from 'react'
import { View, StyleSheet, useWindowDimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import StyledView from '../../styledComponents/StyledView'
import StyledText from '../../styledComponents/StyledText'
import SyledButton from '../../styledComponents/StyledButton'
import { EcoBtnNavigate } from '../../components/EcoBtnNavigate'
import { Slider26 } from '../../components/icons/Slider2-6'

export const CategoriaScreen = () => {
	const { width, height } = useWindowDimensions()

	const navigation = useNavigation()
	return (
		<StyledView dark container height100>
			<View
				style={{
					...styles.containerSlide,

					height: height * 0.1,
				}}
			>
				<Slider26 />
			</View>

			<View style={styles.containerOptions}>
				<EcoBtnNavigate text='Categoría' />
				<EcoBtnNavigate text='Seleccione un rubro' />
				<EcoBtnNavigate text='¿Qué productos es?' />
			</View>

			<StyledText left>Otro:________</StyledText>

			<View
				style={{
					...styles.containerBtn,
					width: width * 1,
				}}
			>
				<SyledButton
					white
					title={'Siguiente'}
					onPress={() => navigation.navigate('TipoProductoScreen')}
				></SyledButton>
			</View>
		</StyledView>
	)
}

const styles = StyleSheet.create({
	containerSlide: {
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 30,
	},

	containerOptions: {},
	containerBtn: {
		position: 'absolute',
		bottom: 80,
		paddingHorizontal: 25,
	},
})

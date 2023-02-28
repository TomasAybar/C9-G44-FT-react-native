import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, useWindowDimensions, View } from 'react-native'
import StyledView from '../../styledComponents/StyledView'
import SyledButton from '../../styledComponents/StyledButton'
import StyledText from '../../styledComponents/StyledText'
import { EcoBtnNavigate } from '../../components/EcoBtnNavigate'
import { Slider36 } from '../../components/icons/Slider3-6'

export const TipoProductoScreen = () => {
	const navigator = useNavigation()

	const { width, height } = useWindowDimensions()

	return (
		<StyledView dark container height100>
			<View
				style={{
					...styles.containerSlide,

					height: height * 0.1,
				}}
			>
				<Slider36 />
			</View>

			<View style={styles.containerOptions}>
				<EcoBtnNavigate text='¿En qué estado se encuentra?' />
				<EcoBtnNavigate text='¿Qué talle es?' />

				<View style={{ marginBottom: 30 }}>
					<StyledText left>Otro:________</StyledText>
				</View>
				<EcoBtnNavigate text='¿Cuál es su color principal?' />
				<StyledText left>Otro:________</StyledText>
			</View>

			<View
				style={{
					...styles.containerBtn,
					width: width * 1,
				}}
			>
				<SyledButton
					white
					title={'Siguiente'}
					onPress={() => navigator.navigate('DescripcionScreen')}
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

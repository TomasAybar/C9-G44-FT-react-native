import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, useWindowDimensions, View } from 'react-native'
import StyledView from '../../styledComponents/StyledView'
import SyledButton from '../../styledComponents/StyledButton'
import StyledText from '../../styledComponents/StyledText'
import { Slider36 } from '../../components/icons/Slider3-6'
import { EcoSelectOption } from '../../components/EcoSelectOption'
import {
	colorsProducts,
	stateProducts,
	sizeProducts,
} from '../../../assets/data.js'
import { useVenderStore } from '../../store/venderStore'

export const TipoProductoScreen = () => {
	const { width, height } = useWindowDimensions()
	const navigator = useNavigation()

	const [productState, setProductState] = useState(null)
	const [productSize, setProductSize] = useState(null)
	const [productColor, setProductColor] = useState(null)

	const addTypes = useVenderStore((state) => state.addProps)

	const nextButtom = () => {
		if (productState && productSize && productColor) {
			navigator.navigate('DescripcionScreen')

			addTypes({ state: productState })
			addTypes({ size: productSize })
			addTypes({ color: productColor })
		} else {
			alert('faltan datos')
		}
	}

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
				<EcoSelectOption
					placeholder='¿En qué estado se encuentra?'
					options={stateProducts}
					onChangeValue={(value) => setProductState(value)}
				/>
				<EcoSelectOption
					placeholder='¿Qué talle es?'
					options={sizeProducts}
					onChangeValue={(value) => setProductSize(value)}
				/>

				<View style={{ marginBottom: 30 }}>
					<StyledText left>Otro:________</StyledText>
				</View>
				<EcoSelectOption
					placeholder='¿Cuál es su color principal?'
					options={colorsProducts}
					onChangeValue={(value) => setProductColor(value)}
				/>

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
					onPress={nextButtom}
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

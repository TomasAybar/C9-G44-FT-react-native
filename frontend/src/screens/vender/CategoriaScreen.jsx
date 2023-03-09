import React, { useState } from 'react'
import { View, StyleSheet, useWindowDimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import StyledView from '../../styledComponents/StyledView'
import StyledText from '../../styledComponents/StyledText'
import SyledButton from '../../styledComponents/StyledButton'
import { Slider26 } from '../../components/icons/Slider2-6'
import { useVenderStore } from '../../store/venderStore'
import { EcoSelectOption } from '../../components/EcoSelectOption'
import { categorys, rubros, typeProducts } from '../../../assets/data.js'

export const CategoriaScreen = () => {
	const { width, height } = useWindowDimensions()
	const navigation = useNavigation()

	const [productCategory, setProductCategory] = useState(null)
	const [productRubro, setProductRubro] = useState(null)
	const [productType, setProductType] = useState(null)

	const addCategory = useVenderStore((state) => state.addProps)

	const nextButtom = () => {
		if (productCategory && productRubro && productType) {
			navigation.navigate('TipoProductoScreen')

			addCategory({ category: productCategory })
			addCategory({ rubro: productRubro })
			addCategory({ type: productType })
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
				<Slider26 />
			</View>

			<View style={styles.containerOptions}>
				<EcoSelectOption
					placeholder='Categoría'
					options={categorys}
					onChangeValue={(value) => setProductCategory(value)}
				/>
				<EcoSelectOption
					placeholder='Seleccione un rubro'
					options={rubros}
					onChangeValue={(value) => setProductRubro(value)}
				/>
				<EcoSelectOption
					placeholder='¿Qué productos es?'
					options={typeProducts}
					onChangeValue={(value) => setProductType(value)}
				/>
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

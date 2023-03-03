import React from 'react'
import StyledText from '../../styledComponents/StyledText'
import StyledView from '../../styledComponents/StyledView'
import StyledButton from '../../styledComponents/StyledButton'
import { Image, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { CategoriasCardCategorias } from '../../components/CategoriasCardCategorias'
import { products } from '../../../assets/data.js'
import { EcoBtnRenderToggle } from '../../components/EcoBtnRender'
import { useToggleButtom } from '../../hooks/useToggleButtom'

export const CategoriasScreen = () => {
	const navigator = useNavigation()

	// const { productsFilter } = useToggleButtom()

	return (
		<StyledView dark height100>
			<ScrollView>
				<StyledView container marginVertical={25}>
					<StyledView row center>
						{/* <StyledButton title={'Hombre'} miniButton>
							Hombre
						</StyledButton>
						<StyledButton title={'Mujer'} miniButton>
							Mujer
						</StyledButton>
						<StyledButton title={'Niño'} miniButton>
							Niño
						</StyledButton> */}

						<EcoBtnRenderToggle
							text1='Hombre'
							text2='Mujer'
							text3='Niños'
							w1={0.27}
							w2={0.2}
							w3={0.2}
						/>
					</StyledView>

					<StyledView>
						{products.map(({ type, id, image }) => (
							<CategoriasCardCategorias
								type={type}
								key={id}
								img={image}
								// productsFilter={productsFilter}
							/>
						))}
					</StyledView>
				</StyledView>
			</ScrollView>
		</StyledView>
	)
}

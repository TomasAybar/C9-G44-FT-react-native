import React from 'react'
import StyledText from '../../styledComponents/StyledText'
import StyledView from '../../styledComponents/StyledView'
import StyledButton from '../../styledComponents/StyledButton'
import { Image, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { CategoriasCardCategorias } from '../../components/CategoriasCardCategorias'
import { products } from '../../../assets/data.js'

export const CategoriasScreen = () => {
	const navigator = useNavigation()

	return (
		<StyledView dark height100>
			<ScrollView>
				<StyledView container marginVertical={25}>
					<StyledView row center>
						<StyledButton title={'Hombre'} miniButton>
							Hombre
						</StyledButton>
						<StyledButton title={'Mujer'} miniButton>
							Mujer
						</StyledButton>
						<StyledButton title={'Niño'} miniButton>
							Niño
						</StyledButton>
					</StyledView>

					<StyledView>
						{products.map(({ type, id }) => (
							<CategoriasCardCategorias type={type} key={id} />
						))}
					</StyledView>
				</StyledView>
			</ScrollView>
		</StyledView>
	)
}

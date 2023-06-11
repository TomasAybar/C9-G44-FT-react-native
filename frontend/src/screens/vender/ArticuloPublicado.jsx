import React, { useEffect } from 'react'
import { View } from 'react-native'
import StyledView from '../../styledComponents/StyledView'
import StyledText from '../../styledComponents/StyledText'
import { PublicationCard } from '../../components/PublicationCard'
import { MaterialIcons } from '@expo/vector-icons'
import theme from '../../themes/theme'
import { useVenderStore } from '../../store/venderStore'

export const ArticuloPublicado = ({ navigation }) => {
	const data = useVenderStore((state) => state.product)
	const clearProduct = useVenderStore((state) => state.clearProduct)

	const btnVolver = () => {
		navigation.popToTop()
		clearProduct()
	}

	useEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				<MaterialIcons
					name='arrow-back-ios'
					size={24}
					color={theme.colors.yellowPrimary}
					style={{ marginRight: 10 }}
					onPress={btnVolver}
				/>
			),
		})
	}, [])

	return (
		<StyledView dark container height100 center>
			<View
				style={{
					marginBottom: 50,
				}}
			>
				<StyledText weight700 size16>
					Artículo publicado:
				</StyledText>
			</View>

			<PublicationCard
				img={data.image}
				name={data.description}
				size={data.size}
				price={data.profit}
			/>
		</StyledView>
	)
}

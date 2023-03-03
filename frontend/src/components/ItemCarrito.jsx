import React from 'react'
import { Image } from 'react-native'
import StyledView from '../styledComponents/StyledView'
import StyledText from '../styledComponents/StyledText'
import Trash from '../components/icons/Trash'
import { shopActions } from '../../redux/actions/shopActions'

export const ItemCarrito = ({ title, price, image, id }) => {
	console.log('borrar')

	const deteleToCart = (id) => {
		console.log(id)

		shopActions.deleteToShop(id)
	}

	return (
		<StyledView row spaceBetween marginBottom={15}>
			<Image
				source={{ uri: image }}
				style={{ width: 127, height: 104, borderRadius: 12 }}
			/>
			<StyledView flex={1} paddingLeft={23} paddingTop={20}>
				<StyledText size12 left>
					{title}
				</StyledText>
				<StyledText size16 weight700 left marginVertical={6}>
					${price}
				</StyledText>
			</StyledView>
			<Trash
				marginTop={28}
				marginRight={8}
				onPress={() => deteleToCart(id)}
			/>
		</StyledView>
	)
}

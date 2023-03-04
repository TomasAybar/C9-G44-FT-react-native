import React from 'react'
import { Image } from 'react-native'
import StyledView from '../styledComponents/StyledView'
import StyledText from '../styledComponents/StyledText'
import Trash from '../components/icons/Trash'
import { useCartStore } from '../store/cartStore'
// import { shopActions } from '../../redux/actions/shopActions'

export const ItemCarrito = ({
	title = 'title',
	price = '4000',
	image = 'https://picsum.photos/id/1/162/192',
	id = 1,
}) => {
	const { removeFromCart } = useCartStore()

	const deteleToCart = (id) => {
		// shopActions.deleteToShop(id)
		console.log('delete')
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
				onPress={() => removeFromCart(id)}
			/>
		</StyledView>
	)
}

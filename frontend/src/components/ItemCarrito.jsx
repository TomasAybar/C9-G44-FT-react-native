import React from 'react'
import { Image } from 'react-native'
import StyledView from '../styledComponents/StyledView'
import StyledText from '../styledComponents/StyledText'
import Trash from '../components/icons/Trash'
import { useCartStore } from '../store/cartStore'

export const ItemCarrito = ({ item }) => {
	const { removeFromCart } = useCartStore()

	return (
		<StyledView row spaceBetween marginBottom={15}>
			<Image
				source={{
					uri: item.image
						? item.image
						: 'https://picsum.photos/id/1/162/192',
				}}
				style={{ width: 127, height: 104, borderRadius: 12 }}
			/>
			<StyledView flex={1} paddingLeft={23} paddingTop={20}>
				<StyledText size12 left>
					{item.name}
				</StyledText>
				<StyledText size16 weight700 left marginVertical={6}>
					${item.price}
				</StyledText>
			</StyledView>
			<Trash
				marginTop={28}
				marginRight={8}
				onPress={() => removeFromCart(item._id)}
			/>
		</StyledView>
	)
}

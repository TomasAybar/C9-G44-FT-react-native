import React, { useState, useEffect } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import StyledText from '../../styledComponents/StyledText'
import StyledView from '../../styledComponents/StyledView'
import StyledButton from '../../styledComponents/StyledButton'
import Star from '../../components/icons/Star'
import Message from '../../components/icons/Message'
import theme from '../../themes/theme'
import { products } from '../../../assets/data.js'
import { useCartStore } from '../../store/cartStore'
import { productRequest } from '../../api/productRequest'
// import { carrito, shopActions } from '../../../redux/actions/shopActions'

export const Producto = () => {
	// const [product, setProduct] = useState()
	const [favorite, setFavorite] = useState(false)
	const { addToCart, cart } = useCartStore()
	const navigator = useNavigation()
	const route = useRoute()
	const item = route.params.item

	// useEffect(() => {
	// 	productRequest.getOneProduct(id).then((res) => {
	// 		setProduct(res.data.response)
	// 		console.log(res.data.response)
	// 	})
	// }, [])

	// const product = products.find((product) => product.id === id)
	// const product = products.find((product) => product.id === id)

	const btnAddToCart = (product) => {
		addToCart(product)

		navigator.navigate('Carrito de compras')
	}

	return (
		<StyledView dark height100>
			<StyledView container>
				<StyledView>
					<StyledView marginTop={10}>
						<Image
							source={{
								uri: item.image,
							}}
							style={{
								width: 342,
								height: 331,
								alignSelf: 'center',
								borderRadius: 20,
							}}
						></Image>
						<StyledView
							radius12
							grey
							opacity={0.6}
							width={32}
							height={32}
							position={'absolute'}
							zIndex={1}
							right={20}
							top={15}
							center
						>
							<TouchableOpacity
								zIndex={20}
								elevation={20}
								onPress={() => setFavorite(!favorite)}
							>
								<StyledView>
									<Star
										alignSelf={'center'}
										fill={
											favorite
												? theme.colors.yellowPrimary
												: null
										}
									/>
								</StyledView>
							</TouchableOpacity>
						</StyledView>
					</StyledView>
					<StyledView row spaceBetween marginTop={30}>
						<StyledView>
							<StyledText left size16 weight700 marginBottom={15}>
								{item.name} {item.brand.toUpperCase()}
							</StyledText>
							<StyledText left size12 marginBottom={15}>
								{item.state}
							</StyledText>
							<StyledText left size12 marginBottom={15}>
								Talle:{' '}
								<StyledText size16 weight600>
									{item.size}
								</StyledText>
							</StyledText>
							<StyledText left size12 marginBottom={15}>
								Color:{' '}
								<StyledText size16 weight600>
									{item.color}
								</StyledText>
							</StyledText>
						</StyledView>
						<StyledView>
							<StyledText size16 weight700 marginRight={40}>
								${item.price}
							</StyledText>
						</StyledView>
					</StyledView>
					<StyledView row spaceBetween marginTop={20}>
						<StyledButton
							white
							title={'Añadir al carrito'}
							width={'73%'}
							onPress={() => btnAddToCart(item)}
						/>
						<StyledView
							radius12
							borderColor={theme.colors.yellowPrimary}
							borderWidth={1}
							height={40}
							width={'22%'}
						>
							<TouchableOpacity>
								<StyledView width100 height100 center>
									<Message alignSelf={'center'} />
								</StyledView>
							</TouchableOpacity>
						</StyledView>
					</StyledView>
				</StyledView>
			</StyledView>
		</StyledView>
	)
}

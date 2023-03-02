import React, { useState } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import StyledText from '../../styledComponents/StyledText'
import StyledView from '../../styledComponents/StyledView'
import StyledButton from '../../styledComponents/StyledButton'
import Star from '../../components/icons/Star'
import Message from '../../components/icons/Message'
import theme from '../../themes/theme'
import { products } from '../../../assets/data.js'

export const Producto = () => {
	const [favorite, setFavorite] = useState(false)
	const navigator = useNavigation()

	const route = useRoute()

	const id = route.params.id

	console.log(id)

	const product = products.find((product) => product.id === id)

	return (
		<StyledView dark height100>
			<StyledView container>
				<StyledView>
					<StyledView marginTop={10}>
						<Image
							source={{
								uri: 'https://picsum.photos/id/1/342/331',
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
								{product.name} {product.brand.toUpperCase()}
							</StyledText>
							<StyledText left size12 marginBottom={15}>
								{product.state}
							</StyledText>
							<StyledText left size12 marginBottom={15}>
								Talle:{' '}
								<StyledText size16 weight600>
									{product.size}
								</StyledText>
							</StyledText>
							<StyledText left size12 marginBottom={15}>
								Color:{' '}
								<StyledText size16 weight600>
									{product.color}
								</StyledText>
							</StyledText>
						</StyledView>
						<StyledView>
							<StyledText size16 weight700 marginRight={40}>
								${product.price}
							</StyledText>
						</StyledView>
					</StyledView>
					<StyledView row spaceBetween marginTop={20}>
						<StyledButton
							white
							title={'Añadir al carrito'}
							width={'73%'}
							onPress={() =>
								navigator.navigate('Carrito de compras')
							}
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

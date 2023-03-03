import React from 'react'
import { ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import StyledText from '../../styledComponents/StyledText'
import StyledView from '../../styledComponents/StyledView'
import StyledButton from '../../styledComponents/StyledButton'
import { BuySteps } from '../../components/BuySteps'
import { ItemCarrito } from '../../components/ItemCarrito'
import { carrito } from '../../../redux/actions/shopActions'

export const Carrito = () => {
	// Carrito: array vacio muestra el carrito vacio, array con contenido muestra el detalle de compra
	// const items = [1]

	const navigator = useNavigation()
	const dispatch = useDispatch()

	// const items = useSelector((store) => store.shopReducers.productsInShop)

	// console.log(items)

	let items = [...carrito]

	const priceTotal = carrito.reduce(
		(total, producto) => total + producto.price,
		0
	)

	return (
		<StyledView dark height100>
			<StyledView container flex={1} spaceBetween>
				{/* Lógica para ver si hay items en el carrito y renderizar lo correspondiente */}
				{items?.length === 0 ? (
					<>
						<StyledView marginTop={70}>
							<StyledText size16 weight700>
								(0) productos
							</StyledText>
							<StyledText size16 weight700>
								Tu carrito de compras está vacío
							</StyledText>
						</StyledView>
						<StyledView height={95} spaceBetween marginBottom={20}>
							<StyledButton
								white
								title={'Ir a comprar'}
								onPress={() => navigator.navigate('Categorías')}
							/>
						</StyledView>
					</>
				) : (
					<>
						<BuySteps step={0} />
						<StyledView flex={1} paddingVertical={25}>
							<ScrollView>
								{/* Dejo el carrito con 4 productos para que se vea el scroll */}

								{items?.map((item) => (
									<ItemCarrito
										title={item.name}
										price={item.price}
										image={item.image}
										key={item.id}
										id={item.id}
									/>
								))}
							</ScrollView>
						</StyledView>
						<StyledView marginBottom={25}>
							<StyledView
								borderWidth={0.7}
								borderColor={'white'}
								height={1}
								backgroundColor={'white'}
								opacity={0.31}
								marginBottom={10}
							></StyledView>
							<StyledView row spaceBetween>
								<StyledText size18 weight500>
									Total
								</StyledText>
								<StyledText size18 weight500>
									${priceTotal}
								</StyledText>
							</StyledView>
						</StyledView>
						<StyledView height={95} spaceBetween marginBottom={20}>
							<StyledButton
								white
								title={'Iniciar compra'}
								onPress={() =>
									navigator.navigate(
										'Selecciona un método de entrega',
										{ priceTotal }
									)
								}
							/>
							<StyledButton
								black
								title={'Seguir comprando'}
								onPress={() => navigator.navigate('Categorías')}
							/>
						</StyledView>
					</>
				)}
			</StyledView>
		</StyledView>
	)
}

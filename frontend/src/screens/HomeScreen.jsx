import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image, ScrollView, TouchableOpacity } from 'react-native'
import StyledText from '../styledComponents/StyledText'
import StyledView from '../styledComponents/StyledView'
import StyledTextInput from '../styledComponents/StyledTextInput'
import { ProductCard } from '../components/ProductCard'
import Search from '../components/icons/Search.jsx'
import { useDispatch, useSelector } from 'react-redux'
import productsActions from '../../redux/actions/productsActions'

export const HomeScreen = () => {
	const navigator = useNavigation()

	{
		/* Falta lograr un scroll horizontal en las categorias y en los productos si se muestran mas de 2 */
	}

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(productsActions.getProducts()).then((res) => console.log(res))
	}, [])

	// const prd = useSelector((store) => store.productReducers.products)

	// console.log('products')
	// console.log(prd)

	return (
		<StyledView dark height100>
			<ScrollView>
				<StyledView container>
					<StyledView row marginTop={10}>
						<StyledTextInput
							style={{ borderWidth: 0, opacity: 1, flexGrow: 1 }}
						>
							Buscador
						</StyledTextInput>
						<Search
							style={{
								position: 'absolute',
								alignSelf: 'center',
								right: 15,
							}}
						/>
					</StyledView>
					<StyledView alignIntems={'center'} marginTop={20}>
						<Image
							source={require('../../assets/homeBanner.png')}
							style={{ width: '100%' }}
						/>
					</StyledView>
					<StyledView row spaceBetween marginTop={30}>
						<StyledText weight500>Categorías</StyledText>
						<TouchableOpacity
							onPress={() => navigator.navigate('Categorías')}
						>
							<StyledText weight500>Ver más</StyledText>
						</TouchableOpacity>
					</StyledView>
					<StyledView row spaceBetween marginTop={15}>
						<StyledView width={'48%'} marginRight={10}>
							<TouchableOpacity
								onPress={() => navigator.navigate('Categorías')}
							>
								<StyledView
									grey
									radius12
									row
									spaceAround
									padding={7}
								>
									<StyledText size16 weight500>
										Remera
									</StyledText>
									<Image
										source={{
											uri: 'https://picsum.photos/id/1/55/70',
										}}
										style={{ width: 50, height: 70 }}
									/>
								</StyledView>
							</TouchableOpacity>
						</StyledView>
						<StyledView width={'48%'} marginRight={10}>
							<TouchableOpacity
								onPress={() => navigator.navigate('Categorías')}
							>
								<StyledView
									grey
									radius12
									row
									spaceAround
									padding={7}
								>
									<StyledText size16 weight500>
										Remera
									</StyledText>
									<Image
										source={{
											uri: 'https://picsum.photos/id/1/55/70',
										}}
										style={{ width: 50, height: 70 }}
									/>
								</StyledView>
							</TouchableOpacity>
						</StyledView>
						<StyledView width={'48%'} marginRight={10}>
							<TouchableOpacity
								onPress={() => navigator.navigate('Categorías')}
							>
								<StyledView
									grey
									radius12
									row
									spaceAround
									padding={7}
								>
									<StyledText size16 weight500>
										Remera
									</StyledText>
									<Image
										source={{
											uri: 'https://picsum.photos/id/1/55/70',
										}}
										style={{ width: 50, height: 70 }}
									/>
								</StyledView>
							</TouchableOpacity>
						</StyledView>
					</StyledView>
					<StyledView row spaceBetween marginTop={15}>
						<StyledText weight500>
							Publicados recientemente
						</StyledText>
						<TouchableOpacity
							onPress={() => navigator.navigate('Categorías')}
						>
							<StyledText weight500>Ver más</StyledText>
						</TouchableOpacity>
					</StyledView>
					<StyledView row spaceBetween marginTop={20}>
						<ProductCard
							img={'https://picsum.photos/id/1/162/192'}
							title={'Zapatilla'}
							price={'10000'}
							flex={1}
						/>
						<ProductCard
							img={'https://picsum.photos/id/1/162/192'}
							title={'Remera'}
							price={'8000'}
							flex={1}
						/>
					</StyledView>
				</StyledView>
			</ScrollView>
		</StyledView>
	)
}

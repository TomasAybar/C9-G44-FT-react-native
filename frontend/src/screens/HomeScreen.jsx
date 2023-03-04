import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image, ScrollView, TouchableOpacity } from 'react-native'
import StyledText from '../styledComponents/StyledText'
import StyledView from '../styledComponents/StyledView'
import StyledTextInput from '../styledComponents/StyledTextInput'
import { ProductCard } from '../components/ProductCard'
import Search from '../components/icons/Search.jsx'
import { useDispatch, useSelector } from 'react-redux'
// import productsActions from '../../redux/actions/productsActions'
import { CategoriasCardHome } from '../components/CategoriasCardHome'
import { products } from '../../assets/data'
import theme from '../themes/theme'

export const HomeScreen = () => {
	const navigator = useNavigation()

	let productsOrder = [...products]

	const desorder = () => {
		return Math.random() - 0.5
	}

	productsOrder = productsOrder.sort(desorder).map((product) => product)

	return (
		<StyledView dark height100>
			<ScrollView>
				<StyledView container>
					<StyledView row marginTop={10}>
						<StyledTextInput
							style={{ borderWidth: 0, opacity: 1, flexGrow: 1 }}
							placeholder={'Buscador'}
							placeholderTextColor={'rgba(255, 255, 255, 0.6)'}
						></StyledTextInput>
						<Search
							style={{
								position: 'absolute',
								alignSelf: 'center',
								right: 15,
							}}
						/>
					</StyledView>

					{/* banner */}
					<StyledView alignIntems={'center'} marginTop={20}>
						<Image
							source={require('../../assets/homeBanner.png')}
							style={{ width: '100%' }}
						/>
					</StyledView>

					{/* title categorias y ver mas */}
					<StyledView row spaceBetween marginTop={30}>
						<StyledText weight500>Categorías</StyledText>
						<TouchableOpacity
							onPress={() => navigator.navigate('Categorías')}
						>
							<StyledText weight500>Ver más</StyledText>
						</TouchableOpacity>
					</StyledView>

					{/* Contenedor categorias */}
					<StyledView row spaceBetween marginTop={15}>
						<ScrollView horizontal>
							{products.map(({ type, id, image }) => (
								<CategoriasCardHome
									type={type}
									key={id}
									img={image}
								/>
							))}
						</ScrollView>
					</StyledView>

					{/* publicados recientemente */}
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
						<ScrollView horizontal>
							{productsOrder.map(({ image, name, price, id }) => (
								<ProductCard
									img={image}
									title={name}
									price={price}
									flex={1}
									margin={10}
									key={id}
									id={id}
								/>
							))}
							{/* <ProductCard
								img={'https://picsum.photos/id/1/162/192'}
								title={'Zapatilla'}
								price={'10000'}
								flex={1}
								margin={10}
							/>
							<ProductCard
								img={'https://picsum.photos/id/1/162/192'}
								title={'Remera'}
								price={'8000'}
								flex={1}
								margin={10}
							/>
							<ProductCard
								img={'https://picsum.photos/id/1/162/192'}
								title={'Zapatilla'}
								price={'10000'}
								flex={1}
								margin={10}
							/>
							<ProductCard
								img={'https://picsum.photos/id/1/162/192'}
								title={'Remera'}
								price={'8000'}
								flex={1}
								margin={10}
							/> */}
						</ScrollView>
					</StyledView>
				</StyledView>
			</ScrollView>
		</StyledView>
	)
}

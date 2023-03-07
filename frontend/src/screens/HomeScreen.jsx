import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Image, ScrollView, TouchableOpacity, View } from 'react-native'
import StyledText from '../styledComponents/StyledText'
import StyledView from '../styledComponents/StyledView'
import StyledTextInput from '../styledComponents/StyledTextInput'
import { ProductCard } from '../components/ProductCard'
import Search from '../components/icons/Search.jsx'
import { CategoriasCardHome } from '../components/CategoriasCardHome'
import { productRequest } from '../api/productRequest'

export const HomeScreen = () => {
	const navigator = useNavigation()

	const [products, setProducts] = useState([])

	const [reload, setReload] = useState(false)

	useEffect(() => {
		productRequest
			.getProducts()
			.then((res) => setProducts(res.data.response))

		console.log('me ejecuto desde home')
	}, [reload])

	const handleReload = () => setReload(!reload)

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
							{products.map((item) => (
								<CategoriasCardHome
									type={item.type}
									key={item._id}
									img={item.image}
								/>
							))}
						</ScrollView>
					</StyledView>

					{/* publicados recientemente */}
					<View style={{ marginBottom: 30, paddingBottom: 35 }}>
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
								{productsOrder.map((item) => (
									<ProductCard
										flex={1}
										margin={10}
										key={item._id}
										item={item}
									/>
								))}
							</ScrollView>
						</StyledView>
					</View>
				</StyledView>
			</ScrollView>
		</StyledView>
	)
}

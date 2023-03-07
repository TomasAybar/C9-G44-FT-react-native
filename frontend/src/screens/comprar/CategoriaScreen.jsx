import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import StyledView from '../../styledComponents/StyledView'
import { Image, ScrollView } from 'react-native'
import StyledTextInput from '../../styledComponents/StyledTextInput'
import { ProductCard } from '../../components/ProductCard'
import Search from '../../components/icons/Search'
import { useProductStore } from '../../store/productStore.js'

// import { products } from '../../../assets/data.js'

export const CategoriaScreen = () => {
	const products = useProductStore((state) => state.products)
	const route = useRoute()
	const type = route.params.type

	console.log(type)

	const productsFilter = products?.filter((product) => product.type === type)

	console.log(productsFilter)

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
					<StyledView row center marginTop={20} flexWrap={'wrap'}>
						{productsFilter.map((item) => (
							<ProductCard key={item._id} item={item} />
						))}
					</StyledView>
				</StyledView>
			</ScrollView>
		</StyledView>
	)
}

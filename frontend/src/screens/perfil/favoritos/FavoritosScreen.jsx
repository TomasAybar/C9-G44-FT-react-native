import React from 'react'
import { View } from 'react-native'
import { FavoriteCard } from '../../../components/FavoriteCard'
import { useFavoriteStore } from '../../../store/FavoriteStore'
import StyledView from '../../../styledComponents/StyledView'

export const FavoritosScreen = () => {
	const { favorites } = useFavoriteStore()

	return (
		<StyledView dark height100 container>
			<View style={{ marginTop: 50 }}>
				{favorites.map((item) => (
					<FavoriteCard key={item.id} item={item} />
				))}
			</View>
		</StyledView>
	)
}

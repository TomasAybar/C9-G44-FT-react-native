import React from 'react'
import { View } from 'react-native'
import { FavoriteCard } from '../../../components/FavoriteCard'
import StyledView from '../../../styledComponents/StyledView'

export const FavoritosScreen = () => {
	return (
		<StyledView dark height100 container>
			<View style={{ marginTop: 50 }}>
				<FavoriteCard />
				<FavoriteCard />
				<FavoriteCard />
				<FavoriteCard text='Cartera' price='8000' />
			</View>
		</StyledView>
	)
}

import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { favoriteRequest } from '../../../api/favoriteRequest'
import { FavoriteCard } from '../../../components/FavoriteCard'
import { useFavorite } from '../../../hooks/useFavorite'
import { useUserStore } from '../../../store/userStore'
import StyledText from '../../../styledComponents/StyledText'
import StyledView from '../../../styledComponents/StyledView'

export const FavoritosScreen = () => {
	const { id } = useUserStore((state) => state.user)

	const [arrayFavorites, setArrayFavorites] = useState([])

	const [reload, setReload] = useState(false)

	useEffect(() => {
		favoriteRequest
			.getFavoriteByUser(id)
			.then((res) => setArrayFavorites(res.data.response))
	}, [reload])

	const handleReload = () => setReload(!reload)

	return (
		<StyledView dark height100 container>
			<View style={{ marginTop: 50 }}>
				{arrayFavorites.length <= 0 ? (
					<>
						<StyledView marginTop={70}>
							<StyledText size16 weight700>
								(0) productos
							</StyledText>
							<StyledText size16 weight700>
								No tienes productos guardados en favoritos
							</StyledText>
						</StyledView>
					</>
				) : (
					arrayFavorites.map((item) => (
						<FavoriteCard
							key={item._id}
							item={item}
							handleReload={handleReload}
						/>
					))
				)}
			</View>
		</StyledView>
	)
}

import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { favoriteRequest } from '../../../api/favoriteRequest'
import { FavoriteCard } from '../../../components/FavoriteCard'
import { useUserStore } from '../../../store/userStore'
import StyledView from '../../../styledComponents/StyledView'

export const FavoritosScreen = () => {
	const [favorites, setFavorites] = useState([])
	const [reload, setReload] = useState(false)

	const { id } = useUserStore((state) => state.user)

	useEffect(() => {
		favoriteRequest
			.getFavoriteByUser(id)
			.then((res) => setFavorites(res.data.response))
	}, [reload])

	/**
	 *
	 * @returns Actualiza mi useEffect que renderiza todos mis favs
	 */
	const handleReload = () => setReload(!reload)

	return (
		<StyledView dark height100 container>
			<View style={{ marginTop: 50 }}>
				{favorites.map((item) => (
					<FavoriteCard
						key={item._id}
						item={item}
						handleReload={handleReload}
					/>
				))}
			</View>
		</StyledView>
	)
}

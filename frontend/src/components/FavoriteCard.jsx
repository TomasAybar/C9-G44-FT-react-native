import React, { useState } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import SyledButton from '../styledComponents/StyledButton'
import StyledText from '../styledComponents/StyledText'
import StarFilled from './icons/StarFilled'
import Star from './icons/Star'
import { useUserStore } from '../store/userStore'
import { favoriteRequest } from '../api/favoriteRequest'
import { useFavorite } from '../hooks/useFavorite'

export const FavoriteCard = ({ item, handleReload }) => {
	const { id } = useUserStore((state) => state.user)

	const [iconFavorite, setIconFavorite] = useState(true)

	const addFavorite = async (productid) => {
		const res = await favoriteRequest.addOrRemoveFavorite(id, productid)

		setIconFavorite(res.data.inFavorite)

		handleReload()
	}

	return (
		<View style={styles.card}>
			<Image source={{ uri: item.image }} style={styles.containerImg} />

			<View style={styles.containerText}>
				<StyledText left yellow weight700 size16 marginBottom={10}>
					{item.name}
				</StyledText>
				<StyledText left yellow size12>
					${item.price}.-
				</StyledText>
			</View>

			<View style={styles.containerBtn}>
				{iconFavorite ? (
					<StarFilled
						marginBottom={10}
						onPress={() => addFavorite(item._id)}
					/>
				) : (
					<Star
						marginBottom={10}
						onPress={() => addFavorite(item._id)}
					/>
				)}

				<SyledButton
					miniButton
					title={'Comprar'}
					width={'130%'}
					marginHorizontal={0}
					onPress={() => alert('Comprar')}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	card: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 30,
	},
	containerImg: {
		width: 72,
		height: 72,
		borderRadius: 8,
	},
	containerText: {
		marginStart: 5,
		width: '55%',
		marginTop: 15,
	},
	containerBtn: {
		alignItems: 'flex-end',
	},
})

import React, { useState } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import SyledButton from '../styledComponents/StyledButton'
import StyledText from '../styledComponents/StyledText'
import StarFilled from './icons/StarFilled'
import Star from './icons/Star'

export const FavoriteCard = ({ text = 'Texto', price = '000000' }) => {
	const [favorite, setFavorite] = useState(favorite)

	return (
		<View style={styles.card}>
			<Image
				source={{ uri: 'https://picsum.photos/id/10/72/72' }}
				style={styles.containerImg}
			/>

			<View style={styles.containerText}>
				<StyledText left yellow weight700 size16 marginBottom>
					{text}
				</StyledText>
				<StyledText left yellow size12>
					${price}.-
				</StyledText>
			</View>

			<View style={styles.containerBtn}>
				{favorite ? (
					<StarFilled
						marginBottom={10}
						onPress={() => setFavorite(!favorite)}
					/>
				) : (
					<Star
						marginBottom={10}
						onPress={() => setFavorite(!favorite)}
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

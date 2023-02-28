import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import StyledText from '../styledComponents/StyledText'

export const PublicationCard = ({
	name = 'Vestido verde',
	size = 'L',
	price = '18.000',
	img = 'https://picsum.photos/id/1/162/192',
}) => {
	return (
		<View style={styles.containerCard}>
			<Image
				source={{ uri: img }}
				style={{ width: 162, height: 192, borderRadius: 12 }}
			/>
			<View style={styles.containerCardText}>
				<StyledText left>{name} Talle</StyledText>
				<StyledText left>{size}</StyledText>
				<StyledText weight700 size16 left>
					$ {price}.-
				</StyledText>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	containerCard: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	containerCardText: {
		marginTop: 20,
	},
})

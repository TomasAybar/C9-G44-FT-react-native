import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import StyledText from '../styledComponents/StyledText'
import theme from '../themes/theme'

export const MensajesCard = ({
	img,
	name,
	price,
	user,
	message,
	state = '',
}) => {
	return (
		<View style={styles.mensaje}>
			<Image
				source={{ uri: img }}
				style={{ width: 56, height: 56, borderRadius: 8 }}
			/>
			<View style={styles.containerText}>
				<StyledText left size16 weight700 overflow={'hidden'}>
					{state != '' && state + ' - '}
					{name} ${price}.-
				</StyledText>
				<StyledText left fontSize={12.8}>
					{user} dice: {message}
				</StyledText>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	mensaje: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		marginBottom: 25,
		paddingBottom: 10,
		borderBottomWidth: 0.6,
		borderBottomColor: theme.colors.greySecondary,
	},
	containerText: {
		marginStart: 30,
		alignItems: 'flex-start',
		overflow: 'hidden',
	},
})

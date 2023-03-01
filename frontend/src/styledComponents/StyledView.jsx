import React from 'react'
import { View, StyleSheet } from 'react-native'
import theme from '../themes/theme'

const styles = StyleSheet.create({
	dark: {
		backgroundColor: theme.colors.appBackground,
	},
	grey: {
		backgroundColor: theme.colors.greyPrimary,
	},
	container: {
		// marginHorizontal: 25,
		paddingHorizontal: 25,
	},
	radius12: {
		borderRadius: 12,
	},
	width50: {
		width: '50%',
	},
	width100: {
		width: '100%',
	},
	height50: {
		height: '50%',
	},
	height100: {
		height: '100%',
	},
	center: {
		justifyContent: 'center',
	},
	row: {
		flexDirection: 'row',
	},
	spaceEvenly: {
		justifyContent: 'space-evenly',
	},
	spaceAround: {
		justifyContent: 'space-around',
	},
	spaceBetween: {
		justifyContent: 'space-between',
	},
	align: {
		alignSelf: 'flex-end',
	},
})

export default function StyledView({
	children,
	dark,
	grey,
	container,
	radius12,
	width50,
	width100,
	height50,
	height100,
	center,
	row,
	spaceEvenly,
	spaceAround,
	spaceBetween,
	align,
	...props
}) {
	const viewStyles = [
		dark && styles.dark,
		grey && styles.grey,
		container && styles.container,
		radius12 && styles.radius12,
		width50 && styles.width50,
		width100 && styles.width100,
		height50 && styles.height50,
		height100 && styles.height100,
		center && styles.center,
		row && styles.row,
		spaceEvenly && styles.spaceEvenly,
		spaceAround && styles.spaceAround,
		spaceBetween && styles.spaceBetween,
		align && styles.align,
	]
	return (
		<View style={viewStyles} {...props}>
			{children}
		</View>
	)
}

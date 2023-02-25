import React, { useState } from 'react'
import {
	Text,
	TouchableOpacity,
	StyleSheet,
	useWindowDimensions,
} from 'react-native'
import theme from '../themes/theme'

export const EcoBtnRender = ({
	text = 'text',
	active = true || false,
	w = 0.4,
}) => {
	const { width, height } = useWindowDimensions()

	const [btnActive, setBtnActive] = useState(active)

	return (
		<TouchableOpacity
			style={[
				style.toucheable,
				btnActive ? style.touchableActive : style.touchableInactive,
				{ width: width * w },
			]}
			onPress={() => setBtnActive(!btnActive)}
		>
			<Text
				style={[
					style.text,
					btnActive ? style.textActive : style.textInactive,
				]}
			>
				{text}
			</Text>
		</TouchableOpacity>
	)
}

const style = StyleSheet.create({
	toucheable: {
		borderRadius: 24,
		paddingVertical: 8,
		paddingHorizontal: 12,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
	},
	touchableActive: {
		backgroundColor: theme.colors.yellowPrimary,
	},
	touchableInactive: {
		backgroundColor: theme.colors.appBackground,
		borderWidth: 1,
		borderColor: theme.colors.yellowPrimary,
	},
	text: {
		textAlign: 'center',
		fontSize: 12,
		lineHeight: 24,
	},
	textActive: {
		color: '#000',
	},
	textInactive: {
		color: theme.colors.yellowPrimary,
	},
})

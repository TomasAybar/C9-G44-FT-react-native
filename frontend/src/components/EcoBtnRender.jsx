import React, { useState } from 'react'
import {
	Text,
	TouchableOpacity,
	StyleSheet,
	useWindowDimensions,
	View,
} from 'react-native'
import theme from '../themes/theme'

export const EcoBtnRender = ({
	text1 = 'text1',
	text2 = 'text2',
	w1 = 0.4,
	w2 = 0.4,
	render1 = <></>,
	render2 = <></>,
}) => {
	const { width, height } = useWindowDimensions()

	const [btnActive, setBtnActive] = useState(true)

	return (
		<>
			<View style={style.containerBtn}>
				<TouchableOpacity
					style={[
						style.toucheable,
						btnActive
							? style.touchableActive
							: style.touchableInactive,
						{ width: width * w1 },
					]}
					onPress={() => setBtnActive(!btnActive)}
				>
					<Text
						style={[
							style.text,
							btnActive ? style.textActive : style.textInactive,
						]}
					>
						{text1}
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={[
						style.toucheable,
						btnActive
							? style.touchableInactive
							: style.touchableActive,
						{ width: width * w2 },
					]}
					onPress={() => setBtnActive(!btnActive)}
				>
					<Text
						style={[
							style.text,
							btnActive ? style.textInactive : style.textActive,
						]}
					>
						{text2}
					</Text>
				</TouchableOpacity>
			</View>
			{btnActive ? render1 : render2}
		</>
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
	containerBtn: {
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		marginBottom: 40,
		marginTop: 15,
	},
})

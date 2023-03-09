import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import theme from '../themes/theme'
import { ArrowForward } from './icons/ArrowForward'

export const EcoBtnNavigate = ({
	text = 'texto',
	navigate,
	styleText,
	onPress,
	...props
}) => {
	const navigation = useNavigation()

	return (
		<TouchableOpacity
			style={[style.toucheable, { ...props }]}
			onPress={onPress}
		>
			<Text style={[style.text, styleText]}>{text}</Text>
			<ArrowForward />
		</TouchableOpacity>
	)
}

const style = StyleSheet.create({
	toucheable: {
		backgroundColor: theme.colors.greyPrimary,
		paddingHorizontal: 12,
		borderRadius: 10,
		height: 60,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		width: '100%',
		marginBottom: 30,
	},
	text: {
		color: '#fff',
		textAlign: 'center',
		fontSize: 16,
		lineHeight: 24,
		fontWeight: '400',
	},
})

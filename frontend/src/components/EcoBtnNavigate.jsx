import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import theme from '../themes/theme'

export const EcoBtnNavigate = ({ text = 'texto', navigate }) => {
	const navigation = useNavigation()

	return (
		<TouchableOpacity
			style={style.toucheable}
			onPress={() =>
				navigate
					? navigation.navigate(navigate)
					: alert('falta la navegacion')
			}
		>
			<Text style={style.text}>{text}</Text>

			<MaterialIcons
				name='arrow-forward-ios'
				size={24}
				color={theme.colors.yellowPrimary}
				style={{ textAlign: 'center' }}
			/>
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

import React from 'react'
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	useWindowDimensions,
} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { EcoBtnNavigate } from '../../../components/EcoBtnNavigate'
import { SettingBtn } from '../../../components/SettingBtn'
import StyledText from '../../../styledComponents/StyledText'
import StyledView from '../../../styledComponents/StyledView'
import theme from '../../../themes/theme'
import { Download } from '../../../components/icons/Download'

export const GananciasScreen = () => {
	const { width, height } = useWindowDimensions()
	return (
		<StyledView dark container height100>
			<View style={{ marginVertical: 20 }}>
				<SettingBtn text='Último mes' />
			</View>

			<View style={{ marginTop: 100, marginBottom: 25 }}>
				<StyledText size14 weight500>
					Ganancias del último mes:
				</StyledText>
			</View>

			<View style={style.ccontainerGanancias}>
				<View
					style={{
						...style.ganancias,
						width: width * 0.5,
						height: 110,
					}}
				>
					<Text style={style.gananciasTotal}>$15.000.-</Text>
				</View>
			</View>

			<TouchableOpacity
				style={style.toucheable}
				onPress={() => alert('Descargar')}
			>
				<Text style={style.text}>Descargar detalle de ventas</Text>

				<Download />
			</TouchableOpacity>
		</StyledView>
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
	ganancias: {
		backgroundColor: theme.colors.yellowPrimary,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 8,
	},
	gananciasTotal: {
		fontWeight: '600',
		fontSize: 25,
	},
	ccontainerGanancias: {
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 50,
	},
	settings: {
		marginTop: 30,
	},
})

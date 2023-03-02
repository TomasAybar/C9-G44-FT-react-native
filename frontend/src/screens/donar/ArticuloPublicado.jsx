import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
	Button,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View,
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { style } from '../../themes/appTheme'
import StyledView from '../../styledComponents/StyledView'
import { PublicationCard } from '../../components/PublicationCard'
import StyledText from '../../styledComponents/StyledText'
import { MaterialIcons } from '@expo/vector-icons'
import theme from '../../themes/theme'

export const ArticuloPublicado = ({ navigation }) => {
	useEffect(() => {
		navigation.setOptions({
			headerLeft: () => (
				<MaterialIcons
					name='arrow-back-ios'
					size={24}
					color={theme.colors.yellowPrimary}
					style={{ marginRight: 10 }}
					onPress={() => navigation.popToTop()}
				/>
			),
		})
	}, [])

	return (
		<StyledView dark container height100 center>
			<View
				style={{
					marginBottom: 50,
				}}
			>
				<StyledText weight700 size16>
					Tu donación publicada
				</StyledText>
			</View>

			<PublicationCard
				name='Retiro: 15/2/23'
				size='9 a 15hs'
				price='10 prendas'
			/>
		</StyledView>
	)
}

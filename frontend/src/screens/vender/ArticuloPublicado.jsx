import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import StyledView from '../../styledComponents/StyledView'
import StyledText from '../../styledComponents/StyledText'
import { PublicationCard } from '../../components/PublicationCard'
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
					Artículo publicado:
				</StyledText>
			</View>

			<PublicationCard />
		</StyledView>
	)
}

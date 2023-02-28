import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import StyledView from '../../styledComponents/StyledView'
import StyledText from '../../styledComponents/StyledText'
import { PublicationCard } from '../../components/PublicationCard'

export const ArticuloPublicado = () => {
	const navigator = useNavigation()

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

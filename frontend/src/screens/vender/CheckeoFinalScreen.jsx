import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, useWindowDimensions, View } from 'react-native'
import SyledButton from '../../styledComponents/StyledButton'
import StyledView from '../../styledComponents/StyledView'
import StyledText from '../../styledComponents/StyledText'
import { Slider66 } from '../../components/icons/Slider6-6'
import { PublicationCard } from '../../components/PublicationCard'

export const CheckeoFinalScreen = () => {
	const navigator = useNavigation()
	const { width, height } = useWindowDimensions()

	return (
		<StyledView dark container height100>
			<View
				style={{
					...styles.containerSlide,

					height: height * 0.1,
				}}
			>
				<Slider66 />
			</View>

			<View style={styles.containerText}>
				<StyledText>
					Dale un último vistazo y si esta correcto, ¡Listo!
				</StyledText>
				<StyledText>a publicar</StyledText>
			</View>

			<PublicationCard />

			<View
				style={{
					...styles.containerBtn,
					width: width * 1,
				}}
			>
				<SyledButton
					white
					title={'Publicar'}
					onPress={() => navigator.navigate('CongratsScreen')}
				></SyledButton>
			</View>
		</StyledView>
	)
}

const styles = StyleSheet.create({
	containerSlide: {
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 30,
	},

	containerOptions: {},
	containerBtn: {
		position: 'absolute',
		bottom: 80,
		paddingHorizontal: 25,
	},
	containerText: {
		marginBottom: 20,
	},
})

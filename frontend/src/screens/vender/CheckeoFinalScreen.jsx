import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {
	Alert,
	Button,
	Image,
	StyleSheet,
	Text,
	useWindowDimensions,
	View,
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { style } from '../../themes/appTheme'
import SyledButton from '../../styledComponents/StyledButton'
import StyledView from '../../styledComponents/StyledView'
import StyledText from '../../styledComponents/StyledText'
import { Slider66 } from '../../components/icons/Slider6-6'
import { PublicationCard } from '../../components/PublicationCard'

export const CheckeoFinalScreen = () => {
	const navigator = useNavigation()
	const { width, height } = useWindowDimensions()

	const alerNavigate = () => {
		Alert.alert(
			'¡Felicitaciones!',
			'Tu producto ya se encuentra publicado',
			[
				{
					text: 'Volver al inicio',
					onPress: () => navigator.popToTop(),
				},
				{
					text: 'Ver mi publicación',
					onPress: () =>
						navigator.navigate('ArticuloPublicadoVender'),
				},
			]
		)
	}

	const loading = () => {
		Alert.alert(
			'Preparando publicacion',
			'En unos instantes verás tu producto publicado.',
			[
				{
					text: 'OK',
					onPress: () => alerNavigate(),
				},
			]
		)
	}

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
					onPress={loading}
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

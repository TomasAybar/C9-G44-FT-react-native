import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Pressable, StyleSheet, useWindowDimensions, View } from 'react-native'
import StyledView from '../../styledComponents/StyledView'
import StyledText from '../../styledComponents/StyledText'
import StyledButton from '../../styledComponents/StyledButton'
import { Slider16 } from '../../components/icons/Slider1-6'
import theme from '../../themes/theme'
import { AddCircle } from '../../components/icons/AddCircle'
import * as ImagePicker from 'expo-image-picker'

export const FotoProductoScreen = () => {
	const { width, height } = useWindowDimensions()
	const navigator = useNavigation()

	const [imageUri, setImageUri] = useState(null)

	const handleChoosePhoto = async () => {
		const result = await ImagePicker.launchImageLibraryAsync()
		if (!result.canceled) {
			setImageUri(result.assets)
		}
	}

	return (
		<StyledView dark>
			<StyledView container height={height * 1}>
				<View style={styles.containerMain}>
					<View
						style={{
							...styles.containerSlide,
							height: height * 0.1,
						}}
					>
						<Slider16 />
					</View>

					<View
						style={{
							...styles.center,
							height: height * 0.15,
						}}
					>
						<StyledText size14 weight600 marginBottom={10}>
							Subi fotos de la prenda.
						</StyledText>

						<StyledText size14 marginBottom={20}>
							Podras cargar hasta 5 imagenes.
						</StyledText>
					</View>

					<View
						style={{
							...styles.center,
							marginBottom: 15,
						}}
					>
						<View
							style={{
								...styles.image,
								height: height * 0.3,
								width: width * 0.6,
							}}
						></View>
					</View>

					<Pressable
						onPress={handleChoosePhoto}
						style={{
							...styles.center,
							marginBottom: 30,
						}}
					>
						{imageUri ? (
							<Image
								source={{ uri: imageUri }}
								style={styles.image}
							/>
						) : (
							<AddCircle />
						)}
					</Pressable>
				</View>

				<View style={styles.containerBtn}>
					<StyledButton
						white
						title={'Siguiente'}
						onPress={() =>
							navigator.navigate('CategoriaScreenVender')
						}
					></StyledButton>
				</View>
			</StyledView>
		</StyledView>
	)
}

const styles = StyleSheet.create({
	containerText: {
		marginBottom: 2,
	},
	containerSlide: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	containerImage: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		backgroundColor: theme.colors.yellowPrimary,
		width: '70%',
		borderRadius: 16,
	},
	center: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	containerBtn: {},
	containerMain: {
		marginBottom: 10,
	},
})

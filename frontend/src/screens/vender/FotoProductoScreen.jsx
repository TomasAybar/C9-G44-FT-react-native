import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
	Image,
	Pressable,
	StyleSheet,
	useWindowDimensions,
	View,
} from 'react-native'
import StyledView from '../../styledComponents/StyledView'
import StyledText from '../../styledComponents/StyledText'
import StyledButton from '../../styledComponents/StyledButton'
import { Slider16 } from '../../components/icons/Slider1-6'
import theme from '../../themes/theme'
import { AddCircle } from '../../components/icons/AddCircle'
import * as ImagePicker from 'expo-image-picker'
import { LogBox } from 'react-native'
import { useVenderStore } from '../../store/venderStore'

LogBox.ignoreLogs([
	'Key "cancelled" in the image picker result is deprecated and will be removed in SDK 48, use "canceled" instead',
])

export const FotoProductoScreen = () => {
	const { width, height } = useWindowDimensions()
	const navigator = useNavigation()

	const [imageUri, setImageUri] = useState(null)

	const handleChoosePhoto = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		})

		if (!result.canceled) {
			setImageUri(result.assets[0].uri)
		}
	}

	const addImage = useVenderStore((state) => state.addProps)

	const nextButtom = () => {
		if (imageUri) {
			navigator.navigate('CategoriaScreenVender')

			addImage({ image: imageUri })
		} else {
			alert('falta img')
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
						<View>
							{imageUri ? (
								<Image
									source={{ uri: imageUri }}
									style={{
										width: width * 0.6,
										height: height * 0.3,
									}}
								/>
							) : (
								<View
									style={{
										...styles.image,
										height: height * 0.3,
										width: width * 0.6,
									}}
								></View>
							)}
						</View>
					</View>

					<Pressable
						onPress={handleChoosePhoto}
						style={{
							...styles.center,
							marginBottom: 30,
						}}
					>
						{/* {imageUri ? (
							<Image
								source={{ uri: imageUri }}
								style={styles.image}
							/>
						) : (
							)} */}
						<AddCircle />
					</Pressable>
				</View>

				<View style={styles.containerBtn}>
					<StyledButton
						white
						title={'Siguiente'}
						onPress={nextButtom}
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

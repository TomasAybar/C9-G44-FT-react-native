import React, { useRef, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
	Button,
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	useWindowDimensions,
} from 'react-native'
import { style } from '../../themes/appTheme'
import StyledView from '../../styledComponents/StyledView'
import StyledText from '../../styledComponents/StyledText'
import StyledButton from '../../styledComponents/StyledButton'
import theme from '../../themes/theme'
import { AddCircle } from '../../components/icons/AddCircle'
import { FormikInputValue } from '../../styledComponents/FormikInputValue'
import { Formik } from 'formik'
import { loginValidationShema } from '../../validationSchema/validationsRegister'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as ImagePicker from 'expo-image-picker'

const initialValues = {
	descripción: '',
}

export const DetalleDonarScreen = () => {
	const navigator = useNavigation()
	const { width, height } = useWindowDimensions()

	const [imageUri, setImageUri] = useState(null)

	const handleChoosePhoto = async () => {
		const result = await ImagePicker.launchImageLibraryAsync()
		if (!result.canceled) {
			setImageUri(result.assets)
		}
	}

	return (
		<KeyboardAwareScrollView
			style={{ backgroundColor: theme.colors.appBackground }}
		>
			<Formik
				validationSchema={loginValidationShema}
				initialValues={initialValues}
				onSubmit={(values) => console.log(values)}
			>
				<StyledView container height100>
					<StyledText left size14 weight600 marginTop={35}>
						Subí fotos de las prendas a donar.
					</StyledText>
					<StyledText size14 left fontStyle={'italic'}>
						(hasta 5 imágenes)
					</StyledText>
					<View style={styles.container}>
						<TouchableOpacity onPress={handleChoosePhoto}>
							{imageUri ? (
								<Image
									source={{ uri: imageUri }}
									style={styles.image}
								/>
							) : (
								<View style={styles.placeholder}>
									<AddCircle />
								</View>
							)}
						</TouchableOpacity>
					</View>
					<View flexDirection={'row'}>
						<StyledText left size14 marginVertical={10}>
							Cantidad de prendas: {'\n'}
						</StyledText>
						<FormikInputValue
							style={{ height: 40, width: 50 }}
							name='cantidad'
							placeholder=' 7'
							placeholderTextColor='rgba(255,255,255,0.5)'
						/>
					</View>
					<StyledText left size12 marginVertical={5}>
						Agrega una descripción (hasta 500 caracteres)
					</StyledText>
					<FormikInputValue
						style={{ height: 100 }}
						name='descripcion'
						placeholder='Ej: 5 remeras de mujer y 1 pantalón infantil'
						placeholderTextColor='rgba(255,255,255,0.5)'
					/>
					<StyledText></StyledText>
					<StyledButton
						marginTop={20}
						white
						title={'Siguiente'}
						onPress={() => navigator.navigate('InformacionScreen')}
					></StyledButton>
				</StyledView>
			</Formik>
		</KeyboardAwareScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 20,
	},
	image: {
		width: 83,
		height: 79,
		borderRadius: 16,
		backgroundColor: theme.colors.greyPrimary,
	},
	placeholder: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 180,
		height: 150,
		marginVertical: 25,
		borderRadius: 16,
		backgroundColor: theme.colors.greyPrimary,
	},
})

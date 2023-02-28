import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {
	Keyboard,
	StyleSheet,
	TextInput,
	useWindowDimensions,
	View,
} from 'react-native'
import StyledView from '../../styledComponents/StyledView'
import { Slider46 } from '../../components/icons/Slider4-6'
import StyledText from '../../styledComponents/StyledText'
import SyledButton from '../../styledComponents/StyledButton'
import theme from '../../themes/theme'

export const DescripcionScreen = () => {
	const navigator = useNavigation()
	const { width, height } = useWindowDimensions()

	const [text, onChangeText] = useState('Useless Text')
	const [number, onChangeNumber] = useState('')

	return (
		<StyledView dark container height100>
			<View
				style={{
					...styles.containerSlide,

					height: height * 0.1,
				}}
			>
				<Slider46 />
			</View>

			<StyledText left>
				Agrega una descripción{' '}
				<StyledText fontStyle={'italic'}>
					(hasta 500 caracteres)
				</StyledText>
			</StyledText>

			<TextInput
				style={styles.input}
				multiline
				numberOfLines={8}
				maxLength={60}
				onChangeText={onChangeNumber}
				value={number}
				placeholder='Vestido verde con botones en el frente'
				returnKeyType='done'
				keyboardType='default'
				placeholderTextColor={'#fff'}
			/>

			<View style={styles.containerText}>
				<View style={styles.text}>
					<StyledText>Precio de publicación:</StyledText>
					<TextInput
						style={styles.inputText}
						keyboardType='text'
						placeholderTextColor={'#fff'}
						placeholder='$20.000.-'
					/>
				</View>

				<View style={styles.text}>
					<StyledText>Tu ganancia:</StyledText>
					<TextInput
						style={styles.inputText}
						keyboardType='text'
						placeholderTextColor={'#fff'}
						placeholder='$18.000.-'
					/>
				</View>
			</View>

			<View style={styles.containerBtn}>
				<SyledButton
					white
					title={'Siguiente'}
					onPress={() => navigator.navigate('MetodoPagoScreen')}
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
	containerBtn: {
		flex: 1,
		justifyContent: 'center',
		marginBottom: 12,
	},
	input: {
		marginTop: 20,
		marginBottom: 40,
		paddingHorizontal: 15,
		backgroundColor: theme.colors.greyPrimary,
		color: '#fff',
		borderRadius: 20,
	},
	containerText: {},
	inputText: {
		borderBottomColor: '#fff',
		borderBottomWidth: 1,
		width: '30%',
		paddingVertical: 5,
	},
	text: {
		alignItems: 'center',
		justifyContent: 'space-between',
		flexDirection: 'row',
		marginBottom: 20,
	},
})

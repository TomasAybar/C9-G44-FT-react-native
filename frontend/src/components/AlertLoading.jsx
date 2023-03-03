import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import StyledText from '../styledComponents/StyledText'
import StyledView from '../styledComponents/StyledView'
import SyledButton from '../styledComponents/StyledButton'
import { useNavigation } from '@react-navigation/native'

export const AlertLoadingCompleted = ({
	title = '¡Titulo!',
	body = 'informacion de body',
	btn1Text = 'boton 1',
	btn2Text = 'boton 2',
	img = true,
	onPress1,
	onPress2,
	btn1 = true,
	btn2 = true,
}) => {
	const navigator = useNavigation()

	return (
		<StyledView position={'absolute'} width100 zIndex={10} marginTop={55}>
			<StyledView
				grey
				marginHorizontal={25}
				borderRadius={16}
				padding={20}
			>
				{img && (
					<Image
						source={require('../../assets/icons/loader-completed.png')}
						alignSelf={'center'}
						marginVertical={5}
					/>
				)}

				<StyledText size16 weight700 marginVertical={15}>
					{title}
				</StyledText>
				<StyledText width={210} opacity={0.8} lineHeight={20}>
					{body}
				</StyledText>
				<StyledView marginTop={30}>
					{btn1 && (
						<SyledButton
							white
							width={'90%'}
							marginBottom={12}
							alignSelf={'center'}
							title={btn1Text}
							onPress={onPress1}
						/>
					)}

					{btn2 && (
						<SyledButton
							black
							backgroundColor={'transparent'}
							width={'90%'}
							alignSelf={'center'}
							title={btn2Text}
							onPress={onPress2}
						/>
					)}
				</StyledView>
			</StyledView>
		</StyledView>
	)
}

export const AlertLoading = ({
	title = 'Titulo',
	body,
	btnCancel = true,
	btnText = 'Cancelar',
	onPress = () => navigator.goBack(),
	img = true,
}) => {
	const navigator = useNavigation()

	return (
		<StyledView position={'absolute'} width100 zIndex={10} marginTop={55}>
			<StyledView
				grey
				marginHorizontal={25}
				borderRadius={16}
				padding={20}
			>
				<StyledText size16 weight700 marginVertical={10}>
					{title}
				</StyledText>
				{body && (
					<StyledText width={210} opacity={0.8} lineHeight={20}>
						{body}
					</StyledText>
				)}

				{img && (
					<Image
						source={require('../../assets/icons/loader.png')}
						alignSelf={'center'}
						marginVertical={10}
					/>
				)}

				{btnCancel && (
					<SyledButton
						white
						width={'90%'}
						marginVertical={20}
						alignSelf={'center'}
						title={btnText}
						onPress={onPress}
					/>
				)}
			</StyledView>
		</StyledView>
	)
}

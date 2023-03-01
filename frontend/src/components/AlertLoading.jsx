import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import StyledText from '../styledComponents/StyledText'
import StyledView from '../styledComponents/StyledView'
import SyledButton from '../styledComponents/StyledButton'
import { useNavigation } from '@react-navigation/native'

export const AlertLoadingCompleted = ({
	title = '¡Pago confirmado!',
	body = 'Te enviamos a tu Email toda la información para la entrega.',
	btn1Nav,
	btn1Text = 'Cerrar',
	btn2Text = 'Seguir comprando',
	btn2Nav,
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
					<SyledButton
						white
						width={'90%'}
						marginBottom={12}
						alignSelf={'center'}
						title={btn1Text}
						onPress={() =>
							btn1Nav
								? navigator.navigate(btn1Nav)
								: navigator.popToTop()
						}
					/>
					<SyledButton
						black
						backgroundColor={'transparent'}
						width={'90%'}
						alignSelf={'center'}
						title={btn2Text}
						onPress={() =>
							btn2Nav
								? navigator.navigate(btn2Nav)
								: navigator.popToTop()
						}
					/>
				</StyledView>
			</StyledView>
		</StyledView>
	)
}

export const AlertLoading = ({
	title = 'Procesando el pago',
	body,
	btnCancel = true,
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

				<Image
					source={require('../../assets/icons/loader.png')}
					alignSelf={'center'}
					marginVertical={10}
				/>
				{btnCancel && (
					<SyledButton
						white
						width={'90%'}
						marginVertical={20}
						alignSelf={'center'}
						title={'Cancelar'}
						onPress={() => navigator.goBack()}
					/>
				)}
			</StyledView>
		</StyledView>
	)
}

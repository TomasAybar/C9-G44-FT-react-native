import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, Text, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { EcoBtnNavigate } from '../../../components/EcoBtnNavigate'
import StyledText from '../../../styledComponents/StyledText'
import StyledView from '../../../styledComponents/StyledView'

export const CompletarMetodoCobroScreen = () => {
	const navigation = useNavigation()
	return (
		<StyledView dark container height100>
			<View
				style={{
					marginTop: 50,
					marginBottom: 100,
				}}
			>
				<StyledText>Elegí un medio para recibir los pagos.</StyledText>
			</View>

			<EcoBtnNavigate
				text='Transferencia bancaria'
				navigate={'MetodoCobroTRFScreen'}
			/>
			<EcoBtnNavigate
				text='Billetera virtual'
				navigate={'MetodoCobroBVScreen'}
			/>
		</StyledView>
	)
}

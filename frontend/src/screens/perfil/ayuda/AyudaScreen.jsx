import React from 'react'
// import { View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import StyledView from '../../../styledComponents/StyledView'
import { EcoBtnNavigate } from '../../../components/EcoBtnNavigate'

export const AyudaScreen = () => {
	const navigator = useNavigation()

	return (
		<StyledView dark height100>
			<StyledView container center>
				<View style={{ marginTop: 50 }}>
					<EcoBtnNavigate
						text='Quiero comprar ¿Cómo hago?'
						navigate={'QuieroComprarScreen'}
					/>
					<EcoBtnNavigate
						text='Quiero vender, ¿Cómo publico?'
						navigate={'QuieroVenderScreen'}
					/>
					<EcoBtnNavigate
						text='Devoluciones'
						navigate={'DevolucionesScreen'}
					/>
					<EcoBtnNavigate
						text='Donaciones'
						navigate={'DonacionesScreen'}
					/>
					<EcoBtnNavigate
						text='Baja de cuenta'
						navigate={'BajarCuentaScreen'}
					/>
				</View>
			</StyledView>
		</StyledView>
	)
}

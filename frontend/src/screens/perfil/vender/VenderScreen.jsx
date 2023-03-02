import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'
import { EcoBtnNavigate } from '../../../components/EcoBtnNavigate'
import StyledView from '../../../styledComponents/StyledView'

export const VenderScreen = () => {
	const navigator = useNavigation()
	return (
		<StyledView dark height100>
			<View style={{ marginTop: 50 }}>
				<StyledView container center>
					<EcoBtnNavigate
						text='Ganancias'
						onPress={() => navigator.navigate('GananciasScreen')}
					/>
					<EcoBtnNavigate
						text='Publicaciones'
						onPress={() =>
							navigator.navigate('PublicacionesScreen')
						}
					/>
					<EcoBtnNavigate
						text='Editar medios de cobro'
						onPress={() => navigator.navigate('MediosCobrosScreen')}
					/>
				</StyledView>
			</View>
		</StyledView>
	)
}

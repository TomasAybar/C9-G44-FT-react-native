import React from 'react'
import { View } from 'react-native'
import { EcoBtnNavigate } from '../../../components/EcoBtnNavigate'
import StyledView from '../../../styledComponents/StyledView'

export const VenderScreen = () => {
	return (
		<StyledView dark height100>
			<View style={{ marginTop: 50 }}>
				<StyledView container center>
					<EcoBtnNavigate
						text='Ganancias'
						navigate={'GananciasScreen'}
					/>
					<EcoBtnNavigate
						text='Publicaciones'
						navigate={'PublicacionesScreen'}
					/>
					<EcoBtnNavigate
						text='Editar medios de cobro'
						navigate={'MediosCobrosScreen'}
					/>
				</StyledView>
			</View>
		</StyledView>
	)
}

import React from 'react'
import StyledText from '../../styledComponents/StyledText'
import StyledView from '../../styledComponents/StyledView'
import StyledButton from '../../styledComponents/StyledButton'
import { BuySteps } from '../../components/BuySteps'
import { EcoBtnNavigate } from '../../components/EcoBtnNavigate'
import { useNavigation } from '@react-navigation/native'

export const SeleccionEfectivo = () => {
	const navigator = useNavigation()

	return (
		<StyledView dark height100>
			<StyledView container flex={1} spaceBetween>
				<BuySteps step={3} />
				<StyledView flex={1} marginTop={50}>
					<EcoBtnNavigate
						text='Efectivo al momento de entrega'
						onPress={() =>
							navigator.navigate('Procesamiento de pago')
						}
						borderRadius={12}
						styleText={{ fontSize: 12 }}
					/>
				</StyledView>
				<StyledView marginBottom={35}>
					<StyledView
						borderWidth={0.7}
						borderColor={'white'}
						height={1}
						backgroundColor={'white'}
						opacity={0.31}
						marginBottom={10}
					></StyledView>
					<StyledView row spaceBetween>
						<StyledText size18 weight500>
							Total
						</StyledText>
						<StyledText size18 weight500>
							$5000
						</StyledText>
					</StyledView>
				</StyledView>
				<StyledButton
					white
					title={'Ir a comprar'}
					onPress={() => navigator.navigate('Procesamiento de pago')}
					marginBottom={30}
				/>
			</StyledView>
		</StyledView>
	)
}

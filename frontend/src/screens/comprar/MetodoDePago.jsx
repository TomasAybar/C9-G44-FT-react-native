import React from 'react'
import { useNavigation } from '@react-navigation/native'
import StyledText from '../../styledComponents/StyledText'
import StyledView from '../../styledComponents/StyledView'
import { BuySteps } from '../../components/BuySteps'
import { EcoBtnNavigate } from '../../components/EcoBtnNavigate'

export const MetodoDePago = () => {
	const navigator = useNavigation()

	return (
		<StyledView dark height100>
			<StyledView container flex={1} spaceBetween>
				<BuySteps step={2} />
				<StyledView flex={1} marginTop={50}>
					<EcoBtnNavigate
						text='Tarjeta de débito/crédito'
						onPress={() => navigator.navigate('Tarjeta')}
						borderRadius={12}
						marginBottom={17}
						styleText={{ fontSize: 12 }}
					/>
					<EcoBtnNavigate
						text='Efectivo al momento de entrega'
						onPress={() => navigator.navigate('Efectivo')}
						borderRadius={12}
						marginBottom={17}
						styleText={{ fontSize: 12 }}
					/>
					<EcoBtnNavigate
						text='Mercado pago'
						onPress={() =>
							navigator.navigate('Procesamiento de pago')
						}
						borderRadius={12}
						styleText={{ fontSize: 12 }}
					/>
				</StyledView>
				<StyledView marginBottom={80}>
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
			</StyledView>
		</StyledView>
	)
}

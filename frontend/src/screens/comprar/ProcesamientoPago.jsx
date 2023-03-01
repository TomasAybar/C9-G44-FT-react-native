import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import StyledText from '../../styledComponents/StyledText'
import StyledView from '../../styledComponents/StyledView'
import StyledButton from '../../styledComponents/StyledButton'
import { BuySteps } from '../../components/BuySteps'
import { Image } from 'react-native'
import {
	AlertLoading,
	AlertLoadingCompleted,
} from '../../components/AlertLoading'

export const ProcesamientoPago = () => {
	const navigator = useNavigation()

	const [completed, setCompleted] = useState(false)

	useEffect(() => {
		setTimeout(() => setCompleted(true), 1500)
	}, [])

	return (
		<StyledView dark height100>
			{completed ? (
				<AlertLoadingCompleted
					btn1Nav={'HomeScreen'}
					btn2Nav={'Categorías'}
					btn1Text={'Cerrar'}
					btn2Text={'Seguir comprando'}
					title={'¡Pago confirmado!'}
					body={
						'Te enviamos a tu Email toda la información para la entrega.'
					}
				/>
			) : (
				<AlertLoading title='Procesando el pago' />
			)}
			<StyledView container flex={1} spaceBetween>
				<BuySteps step={completed ? 4 : 3} />
				<StyledView>
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
						title={'Confirmar compra'}
						onPress={() =>
							navigator.navigate('Procesamiento de pago')
						}
						marginBottom={30}
					/>
				</StyledView>
			</StyledView>
		</StyledView>
	)
}

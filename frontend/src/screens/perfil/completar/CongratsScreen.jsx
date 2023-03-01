import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import StyledView from '../../../styledComponents/StyledView'
import StyledButtton from '../../../styledComponents/StyledButton'
import StyledText from '../../../styledComponents/StyledText'

export const CongratsScreen = () => {
	const navigator = useNavigation()


	return (
		<StyledView dark>
			<StyledView container center height100>
				
				<StyledText size16 weight700 >
					!Listo!
				</StyledText>
				<StyledText size16 weight700 marginBottom={30} marginTop={15}>
					Tu datos fueron cargados con éxito.
				</StyledText>
				<StyledText size12 marginBottom={15} marginTop={15}>
					Ahora podras comprar, vender y donar todo tipo de indumentaria desde la comododidad de tu casa.
				</StyledText>
				<StyledText></StyledText>
				<StyledButtton
					white
					title={'Comenzar'}
					onPress={() => navigator.navigate('StackNavigation')}
				></StyledButtton>
				<StyledText></StyledText>
				<StyledButtton
					black
					title={'Agregar medio de cobro'}
					onPress={() => navigator.navigate('CompletarMetodoCobroScreen')}
				></StyledButtton>
			</StyledView>
		</StyledView>
	)
                }
import React, { useState, useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import StyledView from '../../styledComponents/StyledView'
import {
	AlertLoading,
	AlertLoadingCompleted,
} from '../../components/AlertLoading'

export const CongratsScreen = () => {
	const [completed, setCompleted] = useState(false)

	useEffect(() => {
		setTimeout(() => setCompleted(true), 5000)
	}, [])

	return (
		<StyledView dark height100 justifyContent={'center'}>
			{completed ? (
				<AlertLoadingCompleted
					btn1Nav={'ArticuloPublicadoVender'}
					btn1Text={'Ver mi publicación'}
					btn2Text={'Volver al inicio'}
					title={'¡Felicitaciones!'}
					body={'Tu producto ya se encuentra publicado'}
					img={false}
				/>
			) : (
				<AlertLoading
					title='Preparando publicación'
					body={'En unos instantes verás tu producto publicado.'}
					btnCancel={false}
				/>
			)}
		</StyledView>
	)
}

const styles = StyleSheet.create({})

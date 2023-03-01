import React from 'react'
import { StyleSheet, View } from 'react-native'
import { EcoBtnRender } from '../../../components/EcoBtnRender'
import { MensajesCard } from '../../../components/MensajesCard'
import StyledView from '../../../styledComponents/StyledView'

const Mensajes = () => {
	return (
		<View style={styles.containerMensajes}>
			<MensajesCard
				img={'https://picsum.photos/id/1/56/56'}
				name={'Jean VER'}
				price={'8.000'}
				user={'Cande'}
				message={'es nuevo?'}
			/>
			<MensajesCard
				img={'https://picsum.photos/id/1/56/56'}
				name={'Campera ZARA'}
				price={'15.000'}
				user={'Cande'}
				message={'es nuevo?'}
			/>
			<MensajesCard
				img={'https://picsum.photos/id/1/56/56'}
				name={'Cartera'}
				price={'9.000'}
				user={'Cande'}
				message={'es nuevo?'}
			/>
		</View>
	)
}

const MensajesArchivados = () => {
	return (
		<View style={styles.containerMensajes}>
			<MensajesCard
				img={'https://picsum.photos/id/1/56/56'}
				state={'VENDIDO'}
				name={'Pollera ZARA'}
				price={'5.000'}
				user={'Cande'}
				message={'es nuevo?'}
			/>
		</View>
	)
}

export const MensajesScreen = () => {
	return (
		<StyledView dark container height100>
			<EcoBtnRender
				w1={0.3}
				w2={0.45}
				text1={'Mensajes'}
				text2={'Mensajes archivados'}
				render1={<Mensajes />}
				render2={<MensajesArchivados />}
			/>
		</StyledView>
	)
}

const styles = StyleSheet.create({
	containerBtn: {
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',
		marginBottom: 40,
		marginTop: 15,
	},
	containerMensajes: {},
})

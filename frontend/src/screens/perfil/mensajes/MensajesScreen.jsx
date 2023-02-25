import React from 'react'
import { StyleSheet, View } from 'react-native'
import { EcoBtnRender } from '../../../components/EcoBtnRender'
import { MensajesCard } from '../../../components/MensajesCard'
import StyledView from '../../../styledComponents/StyledView'

export const MensajesScreen = () => {
	return (
		<StyledView dark container height100>
			<View style={styles.containerBtn}>
				<EcoBtnRender text='Mensajes' active w={0.25} />

				<EcoBtnRender
					text='Mensajes archivados'
					active={false}
					w={0.4}
				/>
			</View>

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

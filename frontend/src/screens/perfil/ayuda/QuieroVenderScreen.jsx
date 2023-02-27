import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { ListPaso } from '../../../components/ListPaso'
import StyledText from '../../../styledComponents/StyledText'
import StyledView from '../../../styledComponents/StyledView'

export const QuieroVenderScreen = () => {
	return (
		<StyledView dark container height100>
			<View style={styles.containerTitle}>
				<Image
					source={require('../../../../assets/icons/tab-bar/sell.png')}
				/>
				<StyledText weight700 size16 marginStart={10} left>
					Podrás vender tus artículos en 4 simples pasos:
				</StyledText>
			</View>

			<ListPaso
				number='1'
				content={
					'Ingresa a la sección “vender” y subí fotos del producto (podrás subir hasta 5 imágenes).'
				}
			/>
			<ListPaso
				number='2'
				content={
					'Selecciona tipo de producto, talle y una breve descripción.'
				}
			/>
			<ListPaso
				number='3'
				content={'Indica cómo queres recibir el pago.'}
			/>
			<ListPaso number='4' content={'Publica el producto y ¡Listo! '} />
		</StyledView>
	)
}

const styles = StyleSheet.create({
	containerTitle: {
		alignItems: 'flex-start',
		justifyContent: 'flex-start',
		flexDirection: 'row',
		marginVertical: 40,
	},
})

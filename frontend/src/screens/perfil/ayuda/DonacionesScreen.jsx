import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { ListPaso } from '../../../components/ListPaso'
import StyledText from '../../../styledComponents/StyledText'
import StyledView from '../../../styledComponents/StyledView'

export const DonacionesScreen = () => {
	return (
		<StyledView dark container height100>
			<View style={styles.containerTitle}>
				<Image
					source={require('../../../../assets/icons/tab-bar/donar.png')}
				/>
				<StyledText weight700 size16 marginStart={10} left>
					Tu donación es muy importante, con ella estas ayudando a
					muchas personas.
				</StyledText>
			</View>

			<ListPaso
				number='1'
				content={
					'Ingresa a la sección “donar” y subí fotos del producto (podrás subir hasta 5 imágenes).'
				}
			/>
			<ListPaso
				number='2'
				content={
					'Ingresa la cantidad de artículos que querés donar y agrega una breve descripción.'
				}
			/>
			<ListPaso
				number='3'
				content={
					'Indica fecha, rango horario y dirección, para poder coordinar la entrega.'
				}
			/>
			<ListPaso number='4' content={'Publica el producto y ¡Listo! '} />
			<StyledText left size16>
				Todas las donaciones son realizadas a instituciones benéficas
				verificadas por nuestro equipo.
			</StyledText>
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

import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import StyledView from '../../styledComponents/StyledView'
import StyledText from '../../styledComponents/StyledText'
import SyledButton from '../../styledComponents/StyledButton'
import { CameraDonar } from '../../components/icons/CameraDonar'
import { MaginPenDonar } from '../../components/icons/MaginPenDonar'
import { CalendarTickDonar } from '../../components/icons/CalendarTickDonar'

export const DonarScreen = () => {
	const navigator = useNavigation()

	return (
		<StyledView dark height100>
			<View style={style.containerHeader}>
				<StyledText weight700 size16 line32>
					Dandole una segunda oportunidad a tu ropa,
				</StyledText>
				<StyledText weight700 size16 line32>
					estas ayudando a quienes
				</StyledText>
				<StyledText weight700 size16 line32>
					mas lo necesitan.
				</StyledText>
			</View>

			<StyledView container center>
				<View style={style.contenedorCard}>
					<View style={style.card}>
						<CameraDonar />

						<View
							style={{
								...style.containerText,
								marginStart: 18,
							}}
						>
							<StyledText size14 line24 left>
								Subi fotos de lo que queres donar.
							</StyledText>
						</View>
					</View>

					<View style={style.card}>
						<MaginPenDonar />

						<View style={style.containerText}>
							<StyledText size14 line24 left>
								Contanos la cantidad de prendas que
							</StyledText>
							<StyledText size14 line24 left>
								son y una breve descripcion.
							</StyledText>
						</View>
					</View>

					<View style={style.card}>
						<CalendarTickDonar />

						<View
							style={{
								...style.containerText,
								marginStart: 15,
							}}
						>
							<StyledText size14 line24 left>
								Inidica fecha, horario y direccion para
							</StyledText>
							<StyledText size14 line24 left>
								coordinar la entrega.
							</StyledText>
							<StyledText size14 line24 left>
								¡Listo, publica tu donación!
							</StyledText>
						</View>
					</View>
				</View>

				<SyledButton
					white
					title={'Crear publicación'}
					onPress={() => navigator.navigate('DetalleDonarScreen')}
				></SyledButton>
			</StyledView>
		</StyledView>
	)
}

const style = StyleSheet.create({
	containerHeader: {
		marginTop: 40,
		marginBottom: 20,
	},
	containerText: {
		marginStart: 20,
	},
	card: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	contenedorCard: {
		height: 380,
		justifyContent: 'space-around',
		marginBottom: 45,
	},
})

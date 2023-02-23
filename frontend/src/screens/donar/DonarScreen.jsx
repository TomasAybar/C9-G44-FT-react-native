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
					<View style={style.columnIcons}>
						<CameraDonar />
						<MaginPenDonar />
						<CalendarTickDonar />
					</View>

					<View style={style.columnText}>
						<View>
							<StyledText size14 line24 left>
								Subi fotos de lo que queres donar.
							</StyledText>
						</View>

						<View>
							<StyledText size14 line24 left>
								Contanos la cantidad de prendas que
							</StyledText>
							<StyledText size14 line24 left>
								son y una breve descripcion.
							</StyledText>
						</View>

						<View>
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
	card: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
	contenedorCard: {
		height: 400,
		flexDirection: 'row',
		// borderColor: '#fff',
		// borderWidth: 1,
		justifyContent: 'space-around',
		marginBottom: 20,
	},
	columnIcons: {
		justifyContent: 'space-around',
		marginBottom: 20,
	},
	columnText: {
		justifyContent: 'space-around',
		marginTop: 10,
	},
})

{
	/* <Text style={style.title}>
					Dandole una segunda oportunidad a tu ropa, estas ayudando a
					quienes mas lo necesitan.
				</Text>
				<Text style={style.title}>
					Subi fotos de lo que queres donar.
				</Text>
				<Text style={style.title}>
					Contanos la cantidad de prendas que son y una breve
					descripcion.
				</Text>
				<Text style={style.title}>
					Inidica fecha, horario y direccion para coordinar la
					entrega.
				</Text>
				<Text style={style.title}>Listo, publica tu donacion!</Text> */
}

{
	/* <View style={style.card}>
						<CameraDonar />
						<Text
							style={{
								color: '#fff',
								fontSize: 14,
								lineHeight: 24,
								borderWidth: 1,
								borderColor: '#fff',
							}}
						>
							Subi fotos de lo que queres donar.
						</Text>
						<StyledText size14 line24>
							Subi fotos de lo que queres donar.
						</StyledText>
					</View>

					<View style={style.card}>
						<MaginPenDonar />
						<StyledText size14 line24>
							Contanos la cantidad de prendas que son y una breve
							descripcion.
						</StyledText>
					</View>

					<View style={style.card}>
						<CalendarTickDonar />
						<StyledText size14 line24>
							Inidica fecha, horario y direccion para coordinar la
							entrega. Listo, publica tu donacion!
						</StyledText>
					</View> */
}

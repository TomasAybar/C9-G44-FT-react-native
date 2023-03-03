import React, {useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import {View} from 'react-native'
import StyledView from '../../styledComponents/StyledView'
import StyledText from '../../styledComponents/StyledText'
import StyledButton from '../../styledComponents/StyledButton'
import MapView, {Marker, Polyline} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions'
import {Calendario} from '../donar/Calendario'
import {HoraDesde} from './HoraDesde'
import {HoraHasta} from './HoraHasta'
import * as Location from 'expo-location'
import { MapScreen } from './MapScreen'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import theme from '../../themes/theme'


export const InformacionScreen = () => {
	const navigator = useNavigation()

	{/*const [origin, setOrigin] = React.useState({
		latitude: -34.745251, 
		longitude:-58.411280
	  })

	  const [destination, setDestination] = React.useState({
		latitude: -34.730500, 
		longitude:-58.405824 
	  })


	  React.useEffect( () => {
		getLocationPermission
	  }, [])
	 async function getLocationPermission(){
		let {status} = await Location
		Location.requestForegroundPermissionsAsync();
		if(status!== 'granted'){
			alert('Permiso denegado')
			return;
		}
		let location = await Location.getCurrentPositionAsync({});
		const current = {
			latitude: location.coords.latitude,
			longitude: location.coords.longitude
		}
		setOrigin(current)

	  }*/}

	
	return (
		<KeyboardAwareScrollView
			style={{ backgroundColor: theme.colors.appBackground }}
		>
			<StyledView center container height100 >
			       <StyledText size12 marginVertical={20}>
						Elegí un medio para recibir pagos.
					</StyledText>
					<Calendario/>
					<StyledView alignContent={'space-between'} flexDirection={'row'} width={'45%'}>
					<HoraDesde/>
					<View width={'20%'}/>
					<HoraHasta/>
					</StyledView>
					<StyledText size12 marginBottom={10}>
						Dirección:
					</StyledText>
					{/*<MapView width={'100%'} height={'30%'}
					initialRegion={{
						latitude: origin.latitude,
						longitude: origin.longitude,
						latitudeDelta: 0.09,
						longitudeDelta: 0.04}}>
							<Marker 
							draggable
							coordinate={origin}
							onDragEnd={(direction)=> setOrigin(direction.nativeEvent.coordinate)}
							/>
							<MapViewDirections
							origin={origin}
							destination={destination}
							apikey={'AIzaSyB_v8KrJANdm47egl4pFc_ACNlAaA97LGg'}
					        />
					</MapView>*/}
							<MapScreen />
					<StyledButton
								marginTop={50}
								white
								title={'Siguiente'}
								onPress={() =>navigator.navigate('DonacionExitosa')}
							></StyledButton>
					</StyledView>
					
			</KeyboardAwareScrollView>
	)
}

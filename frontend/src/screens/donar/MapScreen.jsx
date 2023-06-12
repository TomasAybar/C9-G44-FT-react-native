import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import Geocoder from 'react-native-geocoding'
import theme from '../../themes/theme'

Geocoder.init('AIzaSyB_v8KrJANdm47egl4pFc_ACNlAaA97LGg')

export class MapScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      address: '',
      latitude: null,
      longitude: null
    }
  }

  handleAddress = (address) => {
    this.setState({ address })
    Geocoder.from(address).then((json) => {
      const { lat, lng } = json.results[0].geometry.location
      this.setState({ latitude: lat, longitude: lng })
    })
  }

  render () {
    const { latitude, longitude } = this.state

    return (
      <View height={250}>
        <TextInput
          style={{
            height: 30,
            borderColor: 'gray',
            borderWidth: 1,
            color: '#ffffff',
            backgroundColor: theme.colors.greyPrimary,
            marginBottom: 20
          }}
          onChangeText={this.handleAddress}
          value={this.state.address}
        />
        {latitude && longitude && (
          <MapView
            height={230}
            initialRegion={{
              latitude,
              longitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121
            }}
          >
            <Marker
              coordinate={{ latitude, longitude }}
              title='Título del marcador'
              description='Descripción del marcador'
            />
          </MapView>
        )}
      </View>
    )
  }
}

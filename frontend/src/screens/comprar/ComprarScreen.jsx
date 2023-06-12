import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, Text, View } from 'react-native'
import { style } from '../../themes/appTheme'
import { TouchableOpacity } from 'react-native-gesture-handler'

export const ComprarScreen = () => {
  const navigation = useNavigation()

  return (
    <View style={style.alinearCentro}>
      <Text style={style.title}>ComprarScreen</Text>

      <TouchableOpacity>
        <Button title='ir a profile' onPress={() => alert('navigate')} />
      </TouchableOpacity>
    </View>
  )
}

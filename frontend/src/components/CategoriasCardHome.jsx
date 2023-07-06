import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import StyledText from '../styledComponents/StyledText'
import StyledView from '../styledComponents/StyledView'

export const CategoriasCardHome = ({
  type = 'Remera',
  img = 'https://picsum.photos/id/1/55/70'
}) => {
  const navigator = useNavigation()

  return (
    <StyledView width={150} marginRight={10}>
      <TouchableOpacity
        // onPress={() => navigator.navigate('Categoria', { type })}
        onPress={() => console.log('navigate')}
      >
        <StyledView grey radius12 row spaceAround padding={7}>
          <StyledText size16 weight500>
            {type}
          </StyledText>
          <Image
            source={{
              uri: img
            }}
            style={{ width: 50, height: 70 }}
          />
        </StyledView>
      </TouchableOpacity>
    </StyledView>
  )
}

import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import StyledText from '../styledComponents/StyledText'
import StyledView from '../styledComponents/StyledView'

export const CategoriasCardCategorias = ({
  type = 'Remeras',
  img = 'https://picsum.photos/115/148',
  navigate = 'Categoria'
}) => {
  const navigator = useNavigation()

  return (
    <TouchableOpacity 
      // onPress={() => navigator.navigate(navigate, { type })}
      onPress={() => console.log('navigate')}
    >
      <StyledView grey width100 row spaceAround radius12 marginTop={25}>
        <StyledText size16 weight700>
          {type}
        </StyledText>
        <Image source={{ uri: img }} style={{ width: 115, height: 148 }} />
      </StyledView>
    </TouchableOpacity>
  )
}

import React, { useState, useEffect } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import StyledText from '../styledComponents/StyledText'
import StyledView from '../styledComponents/StyledView'
import Star from '../components/icons/Star'
import theme from '../themes/theme'
import { favoriteRequest } from '../api/favoriteRequest'
import { useUserStore } from '../store/userStore'

export const ProductCard = ({ item, margin = 6 }) => {
  // const { id } = useUserStore((state) => state.user)

  const id = '6415ff21e57737b8d7a341b2'

  const [iconFavorite, setIconFavorite] = useState()

  useEffect(() => {
    favoriteRequest
      .iconFavorite(id, item._id)
      .then((res) => setIconFavorite(res.data.inFavorite))
  }, [])

  const navigator = useNavigation()

  const addFavorite = async (productid) => {
    const res = await favoriteRequest.addOrRemoveFavorite(id, productid)

    setIconFavorite(res.data.inFavorite)
  }

  return (
    <StyledView borderRadius12 position='relative' marginHorizontal={margin}>
      <TouchableOpacity
        // onPress={() => navigator.navigate('Detalle del producto', { item })}
        onPress={() => console.log('navigate')}
      >
        <StyledView
          radius12
          grey
          opacity={0.6}
          width={32}
          height={32}
          position='absolute'
          zIndex={1}
          right={10}
          top={6}
          center
        >
          <TouchableOpacity
            zIndex={20}
            elevation={20}
            // onPress={() => addFavorite(item._id)}
            onPress={() => console.log('favorite')}
          >
            <StyledView>
              <Star
                alignSelf='center'
                fill={iconFavorite ? theme.colors.yellowPrimary : null}
              />
            </StyledView>
          </TouchableOpacity>
        </StyledView>
        <Image
          source={{ uri: item.image }}
          style={{ width: 162, height: 192, borderRadius: 12 }}
        />
        <StyledView paddingVertical={20} paddingHorizontal={12}>
          <StyledText size12 left marginBottom={10}>
            {item.name}
          </StyledText>
          <StyledText size16 left weight700>
            $ {item.price}
          </StyledText>
        </StyledView>
      </TouchableOpacity>
    </StyledView>
  )
}

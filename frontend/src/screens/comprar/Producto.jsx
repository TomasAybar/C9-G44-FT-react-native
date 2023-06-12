import React, { useState, useEffect } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import StyledText from '../../styledComponents/StyledText'
import StyledView from '../../styledComponents/StyledView'
import StyledButton from '../../styledComponents/StyledButton'
import Star from '../../components/icons/Star'
import Message from '../../components/icons/Message'
import theme from '../../themes/theme'
import { useCartStore } from '../../store/cartStore'
import { useUserStore } from '../../store/userStore.js'
import { favoriteRequest } from '../../api/favoriteRequest'
// import { products } from '../../../assets/data.js'

export const Producto = () => {
  const { id } = useUserStore((state) => state.user)

  const navigator = useNavigation()

  const { addToCart } = useCartStore()

  const [iconFavorite, setIconFavorite] = useState()

  const route = useRoute()

  const item = route.params.item

  useEffect(() => {
    favoriteRequest
      .iconFavorite(id, item._id)
      .then((res) => setIconFavorite(res.data.inFavorite))
  }, [])

  const btnAddToCart = (product) => {
    addToCart(product)

    navigator.navigate('Carrito de compras')
  }

  const addFavorite = async (productid) => {
    const res = await favoriteRequest.addOrRemoveFavorite(id, productid)

    setIconFavorite(res.data.inFavorite)
  }

  return (
    <StyledView dark height100>
      <StyledView container>
        <StyledView>
          <StyledView marginTop={10}>
            <Image
              source={{
                uri: item.image
              }}
              style={{
                width: 342,
                height: 331,
                alignSelf: 'center',
                borderRadius: 20
              }}
            />
            <StyledView
              radius12
              grey
              opacity={0.6}
              width={32}
              height={32}
              position='absolute'
              zIndex={1}
              right={20}
              top={15}
              center
            >
              <TouchableOpacity
                zIndex={20}
                elevation={20}
                onPress={() => addFavorite(item._id)}
              >
                <StyledView>
                  <Star
                    alignSelf='center'
                    fill={iconFavorite ? theme.colors.yellowPrimary : null}
                  />
                </StyledView>
              </TouchableOpacity>
            </StyledView>
          </StyledView>
          <StyledView row spaceBetween marginTop={30}>
            <StyledView>
              <StyledText left size16 weight700 marginBottom={15}>
                {item.name} {item.brand.toUpperCase()}
              </StyledText>
              <StyledText left size12 marginBottom={15}>
                {item.state}
              </StyledText>
              <StyledText left size12 marginBottom={15}>
                Talle:{' '}
                <StyledText size16 weight600>
                  {item.size}
                </StyledText>
              </StyledText>
              <StyledText left size12 marginBottom={15}>
                Color:{' '}
                <StyledText size16 weight600>
                  {item.color}
                </StyledText>
              </StyledText>
            </StyledView>
            <StyledView>
              <StyledText size16 weight700 marginRight={40}>
                ${item.price}
              </StyledText>
            </StyledView>
          </StyledView>
          <StyledView row spaceBetween marginTop={20}>
            <StyledButton
              white
              title='Añadir al carrito'
              width='73%'
              onPress={() => btnAddToCart(item)}
            />
            <StyledView
              radius12
              borderColor={theme.colors.yellowPrimary}
              borderWidth={1}
              height={40}
              width='22%'
            >
              <TouchableOpacity>
                <StyledView width100 height100 center>
                  <Message alignSelf='center' />
                </StyledView>
              </TouchableOpacity>
            </StyledView>
          </StyledView>
        </StyledView>
      </StyledView>
    </StyledView>
  )
}

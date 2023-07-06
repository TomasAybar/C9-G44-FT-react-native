import React from 'react'
import StyledView from '../../styledComponents/StyledView'
import { ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { CategoriasCardCategorias } from '../../components/CategoriasCardCategorias'
import { EcoBtnRenderToggle } from '../../components/EcoBtnRender'
import { useProductStore } from '../../store/productStore.js'

export const CategoriasScreen = () => {
  const navigator = useNavigation()

  const products = useProductStore((state) => state.products)

  return (
    <StyledView dark height100>
      <ScrollView>
        <StyledView container marginVertical={25}>
          <StyledView row center>
            <EcoBtnRenderToggle
              text1='Hombre'
              text2='Mujer'
              text3='Niños'
              w1={0.27}
              w2={0.2}
              w3={0.2}
            />
          </StyledView>

          <StyledView>
            {products.map(({ type, _id, image }) => (
              <CategoriasCardCategorias type={type} key={_id} img={image} />
            ))}
          </StyledView>
        </StyledView>
      </ScrollView>
    </StyledView>
  )
}

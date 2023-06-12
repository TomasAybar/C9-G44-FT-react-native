import React from 'react'
import { View, StyleSheet, useWindowDimensions } from 'react-native'
import StyledView from '../../styledComponents/StyledView'
import StyledText from '../../styledComponents/StyledText'
import SyledButton from '../../styledComponents/StyledButton'
import { Slider26 } from '../../components/icons/Slider2-6'
import { EcoSelectOption } from '../../components/EcoSelectOption'
import {
  categorys,
  rubros,
  typeProducts,
  brandProducts
} from '../../../assets/data.js'
import { useVender } from '../../hooks/useVender'

export const CategoriaScreen = () => {
  const { width, height } = useWindowDimensions()

  const {
    setProductCategory,
    setProductRubro,
    setProductType,
    setProductBrand,
    nextButtomCategory
  } = useVender()

  return (
    <StyledView dark container height100>
      <View
        style={{
          ...styles.containerSlide,

          height: height * 0.1
        }}
      >
        <Slider26 />
      </View>

      <View>
        <EcoSelectOption
          placeholder='Categoría'
          options={categorys}
          onChangeValue={(value) => setProductCategory(value)}
        />
        <EcoSelectOption
          placeholder='Seleccione un rubro'
          options={rubros}
          onChangeValue={(value) => setProductRubro(value)}
        />
        <EcoSelectOption
          placeholder='¿Qué productos es?'
          options={typeProducts}
          onChangeValue={(value) => setProductType(value)}
        />
        <EcoSelectOption
          placeholder='¿Qué marca es?'
          options={brandProducts}
          onChangeValue={(value) => setProductBrand(value)}
        />
      </View>

      <StyledText left>Otro:________</StyledText>

      <View
        style={{
          ...styles.containerBtn,
          width: width * 1
        }}
      >
        <SyledButton
          white
          title='Siguiente'
          onPress={nextButtomCategory}
        />
      </View>
    </StyledView>
  )
}

const styles = StyleSheet.create({
  containerSlide: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30
  },

  containerBtn: {
    position: 'absolute',
    bottom: 80,
    paddingHorizontal: 25
  }
})
